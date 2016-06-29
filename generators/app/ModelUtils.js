"use strict";
var _ = require('underscore');
var tense = new (require('tense'))();
exports.nativeTypes = ['number', 'Object', 'Date', 'string', 'boolean', 'symbol', 'void', 'null', 'undefined', 'any'];
var ModelUtils = (function () {
    function ModelUtils() {
    }
    ModelUtils.isNativeType = function (type) {
        return _.contains(exports.nativeTypes, type);
    };
    ;
    ModelUtils.toCamelCase = function (sourceStr) {
        return sourceStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    };
    ModelUtils.convertTitleToValidTypeName = function (title) {
        return this.toCamelCase(tense.singularize(title));
    };
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;
