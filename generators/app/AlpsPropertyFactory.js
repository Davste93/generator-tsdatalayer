"use strict";
var TypeHandler_1 = require('./TypeHandler');
var AlpsPropertyFactory = (function () {
    function AlpsPropertyFactory() {
    }
    AlpsPropertyFactory.makeProperty = function (schema, hal, propertyName, isDefinition) {
        return TypeHandler_1.TypeHandler.parseProperty(schema, hal, propertyName, isDefinition);
    };
    return AlpsPropertyFactory;
}());
exports.AlpsPropertyFactory = AlpsPropertyFactory;
