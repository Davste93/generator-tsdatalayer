"use strict";
var _ = require('underscore');
var ResourceList = (function () {
    function ResourceList() {
        this.entityDictionary = {};
    }
    ResourceList.prototype.add = function (entity) {
        if (!entity.url) {
            throw new Error('You cannot add an entity with an invalid URL.');
        }
        this.entityDictionary[entity.url] = entity;
    };
    ResourceList.prototype.addRange = function (entities) {
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            this.add(entity);
        }
    };
    ResourceList.prototype.get = function (url) {
        if (!_.isUndefined(this.entityDictionary[url])) {
            return this.entityDictionary[url];
        }
        else {
            console.warn("Unknown lookup:" + url);
        }
    };
    return ResourceList;
}());
exports.ResourceList = ResourceList;
