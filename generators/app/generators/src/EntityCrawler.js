"use strict";
var popsicle_1 = require('popsicle');
var _ = require('underscore');
var Entity_1 = require('./Entity');
var ResourceList_1 = require('./ResourceList');
var AlpsEntityFactory_1 = require('./AlpsEntityFactory');
var TypeHandler_1 = require('./TypeHandler');
var EntityCrawler = (function () {
    function EntityCrawler(requestConfiguration) {
        if (requestConfiguration === void 0) { requestConfiguration = {}; }
        this.internalModel = [];
        this.requestConfiguration = requestConfiguration;
        this.requestConfiguration.headers = _.extend(requestConfiguration.headers || {});
        this.requestConfiguration.body = _.extend(requestConfiguration.body || {});
        this.resourceList = new ResourceList_1.ResourceList();
    }
    EntityCrawler.prototype.crawlFromRoot = function (profileUrl) {
        var _this = this;
        return popsicle_1.request({
            method: 'GET',
            url: profileUrl,
            headers: this.requestConfiguration.headers,
            body: this.requestConfiguration.body
        }).then(function (response) {
            var profile = response.body;
            var entityCrawlerPromises = new Array();
            for (var e in profile._links) {
                if (e !== 'self') {
                    entityCrawlerPromises.push(_this.crawlEntity(profile._links[e].href));
                }
            }
            return Promise.all(entityCrawlerPromises).then(function (entities) {
                // We now have a list of entities! However we still have work to do,
                // the entity list needs to be converted to an object model.
                // First, we need to add each entity to the resource map.
                _this.resourceList.addRange(entities); // This allows easy lookups to each entity.
                var allEntities = entities.concat(_this.resourceList.getAllDependentResources());
                for (var _i = 0, allEntities_1 = allEntities; _i < allEntities_1.length; _i++) {
                    var entity = allEntities_1[_i];
                    TypeHandler_1.TypeHandler.resolvePropertyTypes(entity, _this.resourceList);
                }
                var serializedEntities = _this.entitiesToSerializableOM(allEntities);
                return serializedEntities;
            });
        });
    };
    EntityCrawler.prototype.crawlEntity = function (entityUrl) {
        var _this = this;
        var schema = {};
        var hal = {};
        return Promise.all([
            // Schema request
            popsicle_1.request({
                method: 'GET',
                url: entityUrl,
                headers: _.extend(this.requestConfiguration.headers, { Accept: 'application/schema+json' }),
                body: this.requestConfiguration.body
            }).then(function (response) {
                return response.body;
            }),
            // HAL request
            popsicle_1.request({
                method: 'GET',
                url: entityUrl,
                headers: _.extend(this.requestConfiguration.headers, { Accept: 'application/hal+json' }),
                body: this.requestConfiguration.body
            }).then(function (response) {
                return response.body;
            })
        ]).then(function (values) {
            var schema = values[0];
            var hal = values[1];
            return AlpsEntityFactory_1.AlpsEntityFactory.makeEntity(schema, hal, entityUrl, _this.resourceList, false);
        });
    };
    EntityCrawler.prototype.entitiesToSerializableOM = function (entities) {
        var serializableOMEntities = _.clone(entities);
        // The point of this is to allow only up to the second level.
        for (var _i = 0, serializableOMEntities_1 = serializableOMEntities; _i < serializableOMEntities_1.length; _i++) {
            var entity = serializableOMEntities_1[_i];
            for (var _a = 0, _b = entity.properties || []; _a < _b.length; _a++) {
                var property = _b[_a];
                var type = new Entity_1.Entity();
                type.name = property.type.name;
                type.isResource = property.type.isResource;
                property.type = type;
            }
        }
        return serializableOMEntities;
    };
    return EntityCrawler;
}());
exports.EntityCrawler = EntityCrawler;
