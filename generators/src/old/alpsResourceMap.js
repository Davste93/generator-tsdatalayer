'use strict';
app = {};
var _ = require('underscore');


//Map Entity (Ex; apiAccountEntry -> Resource URL (http://source/accountEntries))
app._resourceMap = {};
app.addToResourceMap = function(className, uri) {
  app._resourceMap[uri] = {uri : uri, className : className}; //Map entity name in both api_.. format
  app._resourceMap[className] = {uri : uri, className : className}; //and url format
  //We want to be able to find the entity either way.
};



app.getFromResourceMap = function(key) {
  if (_.isUndefined(key)) return undefined;
  if (app._resourceMap.hasOwnProperty(key)){
      return app._resourceMap[key];
  }

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
