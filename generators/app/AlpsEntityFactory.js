"use strict";
var Entity_1 = require('./Entity');
var ModelUtils_1 = require('./ModelUtils');
var AlpsPropertyFactory_1 = require('./AlpsPropertyFactory');
var AlpsEntityFactory = (function () {
    function AlpsEntityFactory() {
    }
    // Creates an entity. Any non complex dependent types are added to the resource list.
    AlpsEntityFactory.makeEntity = function (schema, hal, entityUrl, resourceList, isDefinition) {
        var entity = new Entity_1.Entity();
        entity.properties = [];
        entity.url = entityUrl;
        entity.name = schema.name;
        // Check if this is a nested dependent property:
        if (isDefinition) {
            entity.url = schema.name;
        }
        else {
            entity.name = ModelUtils_1.ModelUtils.convertTitleToValidTypeName(schema.title);
            entity.isResource = true;
        }
        if (ModelUtils_1.ModelUtils.isNativeType(schema.type)) {
            entity.url = schema.name;
            entity.name = schema.type; // By swapping these two, we map native types directly.
            entity.isResource = false;
        }
        for (var propertyName in schema.properties) {
            var property = schema.properties[propertyName];
            entity.properties.push(AlpsPropertyFactory_1.AlpsPropertyFactory.makeProperty(property, hal, propertyName, false));
        }
        for (var definitionName in schema.definitions) {
            var definition = schema.definitions[definitionName];
            definition.name = definitionName;
            var entity_1 = AlpsEntityFactory.makeEntity(definition, hal, null, resourceList, true);
            resourceList.add(entity_1);
        }
        return entity;
    };
    return AlpsEntityFactory;
}());
exports.AlpsEntityFactory = AlpsEntityFactory;
