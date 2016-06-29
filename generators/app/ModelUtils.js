"use strict";
exports.nativeTypes = ['number', 'Object', 'Date', 'string', 'boolean', 'symbol', 'void', 'null', 'undefined', 'any'];
var ModelUtils = (function () {
    function ModelUtils() {
    }
    ModelUtils.isNativeType = function (type) {
        return _.contains(exports.nativeTypes, type);
    };
    ;
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;
