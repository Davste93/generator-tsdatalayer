import {Entity} from './Entity';
import {ModelUtils} from './ModelUtils';
import {AlpsPropertyFactory} from './AlpsPropertyFactory';
import { ResourceList } from './ResourceList';
import { TypeHandler } from './TypeHandler';

export class AlpsEntityFactory {

  // Creates an entity. Any non complex dependent types are added to the resource list.
  public static makeEntity(schema: any, hal: any, entityUrl: string, resourceList: ResourceList, isDefinition: boolean): Entity {
    let entity: Entity = new Entity();
    entity.properties = [];
    entity.url = entityUrl;
    entity.name = schema.name;

    // Check if this is a nested dependent property:
    if (isDefinition) {
        entity.url = schema.name;
    } else {
      entity.name = ModelUtils.convertTitleToValidTypeName(schema.title);
      entity.isResource = true;
    }

    if (ModelUtils.isNativeType(schema.type)) {
        entity.url = schema.name;
        entity.name = schema.type; // By swapping these two, we map native types directly.
        entity.isResource = false;
    }


    for (let propertyName in schema.properties) {
      let property = schema.properties[propertyName];
      entity.properties.push(AlpsPropertyFactory.makeProperty(property, hal, propertyName, false));
    }


    for (let definitionName in schema.definitions) {
      let definition = schema.definitions[definitionName];

       definition.name = definitionName;
       let entity = AlpsEntityFactory.makeEntity(definition, hal, null, resourceList, true);
       resourceList.add(entity);
    }

    return entity;
  }

}
