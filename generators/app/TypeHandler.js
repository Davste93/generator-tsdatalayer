"use strict";
var convertibleTypes = {
    'integer': 'number',
    'Integer': 'number',
    'long': 'number',
    'localDateTime': 'Date',
    'object': 'Object'
};
var TypeHandler = (function () {
    function TypeHandler() {
        this.isNativeOrConvertible = function (type) {
            return (modelutils.isNativeType(type) || !_.isUndefined(this.convertibleTypes[type]));
        };
        this.tryConvertNativeType = function (type) {
            if (!_.isUndefined(this.convertibleTypes[type])) {
                return this.convertibleTypes[type];
            }
            else {
                return type;
            }
        };
        this.convertTypesInProperty = function (prop, hal, entityName) {
            if (!_.isUndefined(prop.$ref)) {
                if (prop.type === 'object') {
                    var complexEntityName = prop.$ref.split('/').pop();
                    prop.type = complexEntityName;
                    prop.isDepEntity = true;
                    delete prop.$ref;
                }
            }
            if (this.isNativeOrConvertible(prop.type)) {
                prop.type = this.tryConvertNativeType(prop.type);
            }
            prop = this.dateTypeHandler(prop);
            prop = this.resourceTypeHandler(prop, hal, entityName);
            return prop;
        };
        this.dateTypeHandler = function (prop) {
            var cpropRef = prop.$ref;
            if (prop.type === 'string' && cpropRef && ~cpropRef.indexOf('localDateTime')) {
                prop.type = 'Date';
                delete prop.$ref;
            }
            return prop;
        };
        this.resourceTypeHandler = function (prop, hal, entityName) {
            if (prop.type === 'string' && prop.format === 'uri') {
                var propertyHal = this.findDeep(hal, 'name', entityName);
                var propertyUrl = propertyHal.rt.split('#')[0];
                debugger;
                var type = resourceMap.getFromResourceMap(propertyUrl);
                prop.resourceUrl = propertyHal;
                prop.isResource = true;
            }
            return prop;
        };
        this.findDeep = function (haystack, needle, value) {
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
    }
    return TypeHandler;
}());
exports.TypeHandler = TypeHandler;
