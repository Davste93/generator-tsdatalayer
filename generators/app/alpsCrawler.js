var request = require('request');
var _ = require('underscore');
var tense = new (require('tense'))();

var app = {};

//Helper functions:
Object.defineProperty(Object.prototype, 'map', {
    value: function(f, ctx) {
        ctx = ctx || this;
        var self = this, result = {};
        Object.keys(self).forEach(function(k) {
            result[k] = f.call(ctx, self[k], k, self);
        });
        return result;
    }
});

String.prototype.toCamelCase = function() {
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

//App

app.profileCrawler = function(url){
    return new Promise( (resolve, reject) => {
      request(url, function(error, response, body) {
        var profile = JSON.parse(body);
        var objectModel = [];

        var entityCrawlerPromises = [];

        for (e in profile._links) {
            if (e !== 'self'){
              var currentPromise = app.entityCrawler(profile._links[e].href);

              entityCrawlerPromises.push(currentPromise);
                currentPromise.then(respEntity => {
                  objectModel.push(respEntity);
                });
            }
        };

        Promise.all(entityCrawlerPromises).then( () => {
          resolve(objectModel);
        });
      });
  });
};

app.entityCrawler = function(url){
  return new Promise( (resolve, reject) => {
    request({
        url: url,
        headers: {
          Accept: 'application/schema+json'
        }
    },
    function(error, response, body) {
      var body = JSON.parse(body);

      var defs = body.definitions;

      //First, we need our typescript object:
      var model = {};
      model.name = tense.singularize(body.title).toCamelCase();

      model.properties = body.properties.map( (p, i, arr) => {
        var currentProperty = arr[i];
        currentProperty = app.typeHandler(currentProperty);
        currentProperty.name = i;

        return currentProperty;
      });

      //Convert properties obj to array:
      model.properties =Object.keys(model.properties).map(key =>   model.properties[key])

      //Now we need all the complex entities it depends on:
      var modelDeps = [];
      resolve(model);
    });



  });
}

app.typeHandler = function(prop){
  var cpropRef = prop['$ref'];

  if (!_.isUndefined(cpropRef)) {
    if (prop.type === "object"){
        var complexEntityName = cpropRef.split("/").pop();
        prop.type = complexEntityName;
        delete prop['$ref'];
    }
  }

  return app.dateTypeHandler(prop);
}

//Supply a property and it will return modified property with dates ready for consumption
app.dateTypeHandler = function(prop){
    var cpropRef = prop['$ref'];
      if (prop.type === "string" && cpropRef && ~cpropRef.indexOf('localDateTime')){
          prop.type = 'Date';
          delete prop['$ref'];
      }

      return prop;
}


module.exports = app;
