var app = {};

var _ = require('underscore');
var modelutils = require('./modelutils');

app.convertibleTypes = {
  "integer" : "number",
  "localDateTime" : "Date"
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
app.convertTypesInProperty = function(prop) {
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


module.exports = app;
