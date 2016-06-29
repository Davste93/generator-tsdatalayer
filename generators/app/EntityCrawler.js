"use strict";
var popsicle_1 = require('popsicle');
var _ = require('underscore');
var ResourceList_1 = require('./ResourceList');
var AlpsEntityFactory_1 = require('./AlpsEntityFactory');
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
                _this.resourceList.addRange(entities);
                return _this.internalModel;
            });
        });
    };
    EntityCrawler.prototype.crawlEntity = function (entityUrl) {
        var schema = {};
        var hal = {};
        return Promise.all([
            popsicle_1.request({
                method: 'GET',
                url: entityUrl,
                headers: _.extend(this.requestConfiguration.headers, { Accept: 'application/schema+json' }),
                body: this.requestConfiguration.body
            }).then(function (response) {
                return response.body;
            }),
            popsicle_1.request({
                method: 'GET',
                url: entityUrl,
                headers: _.extend(this.requestConfiguration.headers, { Accept: 'application/hal+json' }),
                body: this.requestConfiguration.body
            }).then(function (response) {
                debugger;
                return response.body;
            })
        ]).then(function (values) {
            var schema = values[0];
            var hal = values[1];
            return AlpsEntityFactory_1.AlpsEntityFactory.makeEntity(schema, hal);
        });
    };
    return EntityCrawler;
}());
exports.EntityCrawler = EntityCrawler;
