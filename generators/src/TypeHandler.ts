import { ModelUtils } from './ModelUtils';
import { Property } from './Property';
import { Entity } from './Entity';
import { ResourceList } from './ResourceList';
import * as _ from 'underscore';

const convertibleTypes = {
  'integer' : 'number',
  'Integer' : 'number',
  'long' : 'number',
  'localDateTime' : 'Date',
  'object' : 'Object'
};

export class TypeHandler {
  public static isNativeOrConvertible(type) {
    return (ModelUtils.isNativeType(type) || !_.isUndefined(convertibleTypes[type])) ;
  };

  public static tryConvertNativeType(entity: Entity): boolean {
      if (!_.isUndefined(convertibleTypes[entity.name])) {
        entity.name = convertibleTypes[entity.name];
        entity.isResource = false;
        entity.url = null;
        return true; //sucessfully converted
      }

      if (ModelUtils.isNativeType(entity.name)) {
        entity.isResource = false;
        entity.url = null;
        return true;
      }

      return false;
  };

  // Converts property and handles all type-related stuff
  public static parseProperty(prop, hal, entityName, isDefinition): Property {
    let property: Property = new Property();
    property.name = entityName;
    // property.type = prop.type;
    property.type = new Entity();

    // Check for dates:
    if (this.dateTypeHandler(prop, property.type)) {
      return property;
    }

    if (this.typeHandler(prop, hal, entityName, property.type)) {
      return property;
    }

    if (this.isNativeOrConvertible(prop.type)) {
      // Check if complex entityname was a convertible type.
      property.type.name = prop.type;
      property.type.url = prop.name;
      this.tryConvertNativeType(property.type);
      return property;
    }
    // convert / check for resource, and return the converted property.
    return property;
  };


  // Supply a property and it will return modified property with dates ready for consumption
  public static dateTypeHandler(prop, propType: Entity): boolean {
        let cpropRef = prop.$ref;
        if (prop.type === 'string' && cpropRef && ~cpropRef.indexOf('localDateTime')) {
            propType.name = 'Date';
            return true;
        }

        return false;
  };


  public static resolvePropertyTypes(entity: Entity, resourceList: ResourceList) {
    console.log(entity.name);
    for (let property of entity.properties) {
      console.log('-' + property.type.name + " : " + property.type.url);
      if (!ModelUtils.isNativeType(property.type.name) && property.type.url) {
        let type = resourceList.get(property.type.url);
      };
    }
  }

  public static typeHandler(prop, hal, entityName, propType: Entity): boolean {

     if (prop.type === 'string' && prop.format === 'uri') {
       // This is a resource. Let's find it:
       let propertyHal = this.findDeep(hal, 'name', entityName);
       let propertyUrl = propertyHal.rt.split('#')[0];

       // Since we don't have all the entities in the ResourceMap at this point,
       // Create an empty entity with just the URL. It should be enough to attach
       // the real entity later.
       propType.isResource = true;
       propType.url = propertyUrl;

       return true;
     } else if (!_.isUndefined(prop.$ref)) {
         let complexEntityName = prop.$ref.split('/').pop();
         propType.name = complexEntityName;
         propType.isResource = false;
         propType.url = complexEntityName;

        return true;
     }

     return false;
   };


  private static findDeep(haystack, needle, value) {
    let ret = null;
    _.find(haystack, (childHaystack) => {
      if (childHaystack.hasOwnProperty(needle) && childHaystack[needle] === value) {
        ret = childHaystack;
        return true;
      }
      if (_.isObject(childHaystack) || _.isArray(childHaystack)) {
        ret = this.findDeep(childHaystack, needle, value);
        if (ret != null) {
          return true;
        }
      }
    });

    return ret;
  }
}
