'use strict';
var request = require('request');
var _ = require('underscore');
var tense = new (require('tense'))();

var typeHandler = require('./alpsTypeHandler');
var opsCrawler = require('./alpsOperationsCrawler');
var resourceMap = require('./alpsResourceMap');
var app = {};

//I'm aware this is breaking best practices, needs to be refactored.
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
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

//App
//KeyValuePair of unique models:
app.generatedModels = {};
app.addGeneratedModel = function(model, key)
{
  var k = key || tense.singularize(model.name || model.title).toCamelCase();
  app.generatedModels[k] = model;
};
app.generatedModelsToArray = function() {
  return Object.keys(app.generatedModels).map(key => app.generatedModels[key]);
};



app.profileCrawler = function(url){
    return new Promise( (resolve, reject) => {
      request({
        url : url,
        headers: {
          "Authorization" : "Basic dGVzdDp0ZXN0"
        }
      },
      function(error, response, body) {
        var profile = JSON.parse(body);

        var entityCrawlerPromises = [];

        for (let e in profile._links) {
            if (e !== 'self'){
              var currentPromise = app.entityCrawler(profile._links[e].href);
              entityCrawlerPromises.push(currentPromise);
            }
        }

        Promise.all(entityCrawlerPromises).then( () => {
          var result = app.generatedModelsToArray();
          opsCrawler.addOperationsToOM(result);
          resolve(result);
        });
      });
  });
};

app.entityCrawler = function(url){
  return new Promise( (resolve, reject) => {
    //Get schema+json
    request({
        url: url,
        headers: {
          Accept: 'application/schema+json',
          Authorization : "Basic dGVzdDp0ZXN0"
        }
    },
    function(error, response, schemaString) {
      //Todo: Chain promise, need to check if this library supports it
      //Get HAL
        request({
            url: url,
            headers: {
              Accept: 'application/hal+json',
              Authorization : "Basic dGVzdDp0ZXN0"
            }
        },
        function(error, response, halString) {

          var schema = JSON.parse(schemaString);
          var hal = JSON.parse(halString);
          //First, we need our typescript object:
          schema.sourceUrl = url;
          app.entityHandler(schema, hal);


          resolve();
    });
  });
});
}

//Returns an array of entity + deps. A "DepEntity" is an entity which we
//can't directly read or write, so it should be flagged as such
app.entityHandler = function(entity, hal, entityName, isDepEntity){

  if (!_.isObject(entity)){
    return null;
  }

  var model = {};


  model.name = tense.singularize(entityName || entity.title).toCamelCase();

  if (!_.isUndefined(entity.sourceUrl)) {
    resourceMap.addToResourceMap(model.name, entity.sourceUrl);
  }

  model.properties = entity.properties.map( (p, key, arr) => {
    var currentProperty = arr[key];
    currentProperty = typeHandler.convertTypesInProperty(currentProperty, hal, key);
    currentProperty.name = key;

    return currentProperty;
  });

  //Convert properties obj to array:
  model.properties = Object.keys(model.properties).map(key =>   model.properties[key]);
  model.isDepEntity = (isDepEntity || false);
  app.addGeneratedModel(model);



  //Now we need all the complex entities it depends on:
  var modelDeps = app.dependencyHandler(entity.definitions);
};

//Parse dependency recursively, build dependencies.
app.dependencyHandler = function(deps){
  var depModels = [];

  _.each(deps, (d, k) => {
    if (d.type === 'object'){
      app.entityHandler(d, null, k, true);
    }
  });

  return depModels;
};


module.exports = app;
