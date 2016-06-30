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
    ModelUtils.getDependencies = function (model) {
        var _this = this;
        var deps = new Array();
        _.each(model.properties, function (p) {
            if (!_this.isNativeType(p.type.name)) {
                // No duplicates by "Type" key
                if (_.isUndefined(_.findWhere(deps, { type: p.type }))) {
                    deps.push(p.type.name);
                }
            }
        });
        return deps;
    };
    ;
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;
