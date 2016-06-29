import { ModelUtils } from './ModelUtils';
const convertibleTypes = {
  'integer' : 'number',
  'Integer' : 'number',
  'long' : 'number',
  'localDateTime' : 'Date',
  'object' : 'Object'
};

export class TypeHandler {


  isNativeOrConvertible = function(type) {
    return (modelutils.isNativeType(type) || !_.isUndefined(this.convertibleTypes[type])) ;
  };

  tryConvertNativeType = function(type){
      if(!_.isUndefined(this.convertibleTypes[type])){
        return this.convertibleTypes[type];
      } else {
        return type;
      }
  };

  // Converts property and handles all type-related stuff
  convertTypesInProperty = function(prop, hal, entityName) {
    // Short circuit complex entity name, remove $ref and set type to entityName
    if (!_.isUndefined(prop.$ref)) {
      if (prop.type === 'object'){
          let complexEntityName = prop.$ref.split('/').pop();
          prop.type = complexEntityName;
          prop.isDepEntity = true;
          delete prop.$ref;
      }
    }

    if (this.isNativeOrConvertible(prop.type)){
      // Check if complex entityname was a convertible type.
      prop.type = this.tryConvertNativeType(prop.type);
    }

    // Check for dates:
    prop = this.dateTypeHandler(prop);

    // Check for resource:
    prop = this.resourceTypeHandler(prop, hal, entityName);

    // return the converted property.
    return prop;
  };


  // Supply a property and it will return modified property with dates ready for consumption
  dateTypeHandler = function(prop){
      let cpropRef = prop.$ref;
        if (prop.type === 'string' && cpropRef && ~cpropRef.indexOf('localDateTime')){
            prop.type = 'Date';
            delete prop.$ref;
        }

        return prop;
  };


  resourceTypeHandler = function(prop, hal, entityName) {
     if (prop.type === 'string' && prop.format === 'uri'){
       // This is a resource. Let's find it:
       let propertyHal = this.findDeep(hal, 'name', entityName);
       let propertyUrl = propertyHal.rt.split('#')[0];
       debugger;
       let type = resourceMap.getFromResourceMap(propertyUrl);


       prop.resourceUrl = propertyHal;
       prop.isResource = true;
     }
     return prop;
   };


  findDeep = function(haystack, needle, value) {
    let ret = null;
    _.find(haystack, (childHaystack) => {
      if (childHaystack.hasOwnProperty(needle) && childHaystack[needle] === value) {
        ret = childHaystack;
        return true;
      }
      if (_.isObject(childHaystack) || _.isArray(childHaystack)){
        ret = this.findDeep(childHaystack, needle, value);
        if (ret != null) {
          return true;
        }
      }
    });

    return ret;
  }
}
