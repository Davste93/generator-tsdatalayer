"use strict";
var ModelUtils_1 = require('./ModelUtils');
var Property_1 = require('./Property');
var Entity_1 = require('./Entity');
var _ = require('underscore');
var convertibleTypes = {
    'integer': 'number',
    'Integer': 'number',
    'long': 'number',
    'localDateTime': 'Date',
    'object': 'Object'
};
var TypeHandler = (function () {
    function TypeHandler() {
    }
    TypeHandler.isNativeOrConvertible = function (type) {
        return (ModelUtils_1.ModelUtils.isNativeType(type) || !_.isUndefined(convertibleTypes[type]));
    };
    ;
    TypeHandler.tryConvertNativeType = function (entity) {
        if (!_.isUndefined(convertibleTypes[entity.name])) {
            entity.name = convertibleTypes[entity.name];
            entity.isResource = false;
            entity.url = null;
            return true;
        }
        if (ModelUtils_1.ModelUtils.isNativeType(entity.name)) {
            entity.isResource = false;
            entity.url = null;
            return true;
        }
        return false;
    };
    ;
    TypeHandler.parseProperty = function (prop, hal, entityName, isDefinition) {
        var property = new Property_1.Property();
        property.name = entityName;
        property.type = new Entity_1.Entity();
        if (this.dateTypeHandler(prop, property.type)) {
            return property;
        }
        if (this.typeHandler(prop, hal, entityName, property.type)) {
            return property;
        }
        if (this.isNativeOrConvertible(prop.type)) {
            property.type.name = prop.type;
            property.type.url = prop.name;
            this.tryConvertNativeType(property.type);
            return property;
        }
        return property;
    };
    ;
    TypeHandler.dateTypeHandler = function (prop, propType) {
        var cpropRef = prop.$ref;
        if (prop.type === 'string' && cpropRef && ~cpropRef.indexOf('localDateTime')) {
            propType.name = 'Date';
            return true;
        }
        return false;
    };
    ;
    TypeHandler.resolvePropertyTypes = function (entity, resourceList) {
        console.log(entity.name);
        for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            if (property.type.url) {
                property.type = resourceList.get(property.type.url);
            }
        }
    };
    TypeHandler.typeHandler = function (prop, hal, entityName, propType) {
        if (prop.type === 'string' && prop.format === 'uri') {
            var propertyHal = this.findDeep(hal, 'name', entityName);
            var propertyUrl = propertyHal.rt.split('#')[0];
            propType.isResource = true;
            propType.url = propertyUrl;
            return true;
        }
        else if (!_.isUndefined(prop.$ref)) {
            var complexEntityName = prop.$ref.split('/').pop();
            propType.name = complexEntityName;
            propType.isResource = false;
            propType.url = complexEntityName;
            return true;
        }
        return false;
    };
    ;
    TypeHandler.findDeep = function (haystack, needle, value) {
        var _this = this;
        var ret = null;
        _.find(haystack, function (childHaystack) {
            if (childHaystack.hasOwnProperty(needle) && childHaystack[needle] === value) {
                ret = childHaystack;
                return true;
            }
            if (_.isObject(childHaystack) || _.isArray(childHaystack)) {
                ret = _this.findDeep(childHaystack, needle, value);
                if (ret != null) {
                    return true;
                }
            }
        });
        return ret;
    };
    return TypeHandler;
}());
exports.TypeHandler = TypeHandler;
