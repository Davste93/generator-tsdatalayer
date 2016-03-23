'use strict';
var request = require('request');
var _ = require('underscore');
var tense = new (require('tense'))();

var typeHandler = require('./alpsTypeHandler');

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
      request(url, function(error, response, body) {
        var profile = JSON.parse(body);

        var entityCrawlerPromises = [];

        for (let e in profile._links) {
            if (e !== 'self'){
              var currentPromise = app.entityCrawler(profile._links[e].href);

              entityCrawlerPromises.push(currentPromise);

            }
        }

        Promise.all(entityCrawlerPromises).then( () => {
          resolve(app.generatedModelsToArray());
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
      body = JSON.parse(body);
      console.log(body);

      //First, we need our typescript object:
      var model = app.entityHandler(body);
      resolve(model);
    });
  });
};

//Returns an array of entity + deps. A "DepEntity" is an entity which we
//can't directly read or write, so it should be flagged as such
app.entityHandler = function(entity, entityName, isDepEntity){
  var ret = [];

  if (!_.isObject(entity)){
    return null;
  }

  var model = {};
  model.name = tense.singularize(entityName || entity.title).toCamelCase();

  model.properties = entity.properties.map( (p, i, arr) => {
    var currentProperty = arr[i];
    currentProperty = typeHandler.convertTypesInProperty(currentProperty);
    currentProperty.name = i;

    return currentProperty;
  });

  //Convert properties obj to array:
  model.properties = Object.keys(model.properties).map(key =>   model.properties[key]);
  model.isDepEntity = (isDepEntity || false);
  app.addGeneratedModel(model);

  //Now we need all the complex entities it depends on:
  var modelDeps = app.dependencyHandler(entity.definitions);

  return ret;
};

//Parse dependency recursively, build dependencies.
app.dependencyHandler = function(deps){
  var depModels = [];

  _.each(deps, (d, k) => {
    if (d.type === 'object'){
      app.entityHandler(d, k, true);
    }
  });

  return depModels;
};




module.exports = app;
