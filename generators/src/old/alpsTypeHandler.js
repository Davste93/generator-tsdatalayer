'use strict';
var app = {};

var _ = require('underscore');
var modelutils = require('./modelutils');
var resourceMap = require('./alpsResourceMap');

app.convertibleTypes = {
  "integer" : "number",
  "Integer" : "number",
  "long" : "number",
  "localDateTime" : "Date",
  "object" : "Object"
};




app.isNativeOrConvertible = function(type) {
  return (modelutils.isNativeType(type) || !_.isUndefined(app.convertibleTypes[type])) ;
};

app.tryConvertNativeType = function(type){
    if(!_.isUndefined(app.convertibleTypes[type])){
      return app.convertibleTypes[type];
    } else {
      return type;
    }
};

//Converts property and handles all type-related stuff
app.convertTypesInProperty = function(prop, hal, entityName) {
  //Short circuit complex entity name, remove $ref and set type to entityName
  if (!_.isUndefined(prop.$ref)) {
    if (prop.type === "object"){
        var complexEntityName = prop.$ref.split("/").pop();
        prop.type = complexEntityName;
        prop.isDepEntity = true;
        delete prop.$ref;
    }
  }

  if (app.isNativeOrConvertible(prop.type)){
    //Check if complex entityname was a convertible type.
    prop.type = app.tryConvertNativeType(prop.type);
  }

  //Check for dates:
  prop = app.dateTypeHandler(prop);

  //Check for resource:
  prop = app.resourceTypeHandler(prop, hal, entityName);

  //return the converted property.
  return prop;
};


//Supply a property and it will return modified property with dates ready for consumption
app.dateTypeHandler = function(prop){
    var cpropRef = prop.$ref;
      if (prop.type === "string" && cpropRef && ~cpropRef.indexOf('localDateTime')){
          prop.type = 'Date';
          delete prop.$ref;
      }

      return prop;
};


 app.resourceTypeHandler = function(prop, hal, entityName) {
   if (prop.type === "string" && prop.format === 'uri'){
     //This is a resource. Let's find it:
     var propertyHal = app.findDeep(hal, 'name', entityName);
     var propertyUrl = propertyHal.rt.split('#')[0];
     debugger;
     var type = resourceMap.getFromResourceMap(propertyUrl);


     prop.resourceUrl = propertyHal;
     prop.isResource = true;
   }
   return prop;
 };


app.findDeep = function(haystack, needle, value) {
  var ret = null;
  _.find(haystack, (childHaystack) => {
    if (childHaystack.hasOwnProperty(needle) && childHaystack[needle] === value) {
      ret = childHaystack;
      return true;
    }
    if (_.isObject(childHaystack) || _.isArray(childHaystack)){
      ret = app.findDeep(childHaystack, needle, value);
      if (ret != null) {
        return true;
      }
    }
  });

  return ret;
}


 //Recursive find (todo)


module.exports = app;
