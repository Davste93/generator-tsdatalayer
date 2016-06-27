'use strict';
var app = {};
var _ = require('underscore');
var en = require('lingo').en;

//This method will need to generate something similar to the following on each model:
/* "model": "user",
 "operations": {
    crud : {
     "create": "/user/{{id}}/",
     "read": "/user/{{id}}/",
     "readAll": "/user/",
     "update": "/user/{{id}}/",
     "delete": "/user/{{id}}/"
   },
   custom : {
     "getAddresses": {
       "url" : "",
       "model": "Address",
       "entityType": "List"
     },
     "getJob": {
       "url" : "",
       "model": "Job",
       "entityType": "Entity"
     }
  }
 }
 */
//Call only after all the schema has been populated
app.addOperationsToOM = function(om) {

_.each(om, currentModel => {

  var url = app._resourceMap[currentModel.name];


    if (!_.isUndefined(url) && !_.isUndefined(url.uri)) {

      url.uri = url.uri.replace('/profile/', '/'); //Requests are made to same url minus /profile/
    //1. CRUD
      currentModel.operations = {
        crud : {
          "create": url.uri,
          "find": url.uri + "/{{id}}/",
          "findAll": url.uri,
          "update": url.uri + "/{{id}}/",
          "delete": url.uri + "/{{id}}/"
        },
        custom : {}
      };
    }

      //2. Get custom calls:
      _.each(currentModel.properties, p => {
            if (p.isResource === true){
              //console.log('getting resource ' + p.name);
              var urlData = app.getFromResourceMap(p.name.toLowerCase());
                if (!_.isUndefined(urlData)) {

                  var funcName = 'get' + p.name[0].toUpperCase() + p.name.slice(1);
                  //console.log('funcname set.' + currentModel.operations);

                  if (_.isUndefined(currentModel.operations)) {
                    currentModel.operations = {};
                  }

                  if (_.isUndefined(currentModel.operations.custom)) {
                    currentModel.operations.custom = {};
                  }


                  currentModel.operations.custom[funcName] = {
                    //This looks like magic, but basically, for alps, we know the format for
                    // non-basic CRUD operations follows something like:
                    // http://api/externalEntity/idFromOurProperties.
                    // However, for other projects, it may easily be:
                    // http://api/externalEntity?idFromOurProperties
                    // or:
                    // http://api/externalEntity/idFromOurProperties.
                    // So, to solve this issue, we will use the format:
                    // http://api/externalEntity/{{idFromOurProperties}},
                    // where anything between curly brackets can be a property.
                    url : (urlData.uri || '').replace('/profile/', '/') + '/{{' + p.name + '}}',
                    model : urlData.className,
                    isList : urlData.isList
                  };
                }
                //console.log('finished');
            }
      });

  });

  //console.log(om);

};

//Map Entity (Ex; apiAccountEntry -> Resource URL (http://source/accountEntries))
app._resourceMap = {};
app.addToResourceMap = function(className, uri) {
  var lastPartofUri = uri.split('/').pop();
  app._resourceMap[lastPartofUri] = {uri : uri, className : className}; //Map entity name in both api_.. format
  app._resourceMap[className] = {uri : uri, className : className}; //and url format
  //We want to be able to find the entity either way.
};



app.getFromResourceMap = function(key) {
  if (_.isUndefined(key)) return undefined;

  var ret = {
    uri : "",
    isList : en.isPlural(key)
  };

  if (!ret.isList){
    var pluralKey = en.pluralize(key);

    if (Array.prototype.indexOf(app._resourceMap, pluralKey) < 0 ){
       console.log('The entity name ' + pluralKey + ' could not be found ');
    } else {
      ret.uri = app._resourceMap[pluralKey].uri;
      ret.className = app._resourceMap[pluralKey].className;
    }
  } else {
    ret.uri = app._resourceMap[key].uri;
    ret.className = app._resourceMap[key].className;
  }


  return ret;
};


module.exports = app;
