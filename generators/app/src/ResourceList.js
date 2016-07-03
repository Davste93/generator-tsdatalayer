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
    ResourceList.prototype.getByName = function (name) {
        for (var entityKey in this.entityDictionary) {
            var entity = this.entityDictionary[entityKey];
            if (entity.name === name) {
                return entity;
            }
        }
        return null;
    };
    ResourceList.prototype.getAllDependentResources = function () {
        var entities = new Array();
        for (var entityKey in this.entityDictionary) {
            var entity = this.entityDictionary[entityKey];
            if (!entity.isResource) {
                entities.push(entity);
            }
        }
        return entities;
    };
    return ResourceList;
}());
exports.ResourceList = ResourceList;
