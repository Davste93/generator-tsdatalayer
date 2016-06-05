"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require("inversify");
var apiAccountRuleService = (function () {
    function apiAccountRuleService(apiAccountPermissionDataLayer, apiAccountRuleDataLayer) {
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
        this.apiAccountRuleDataLayer = apiAccountRuleDataLayer;
    }
    apiAccountRuleService.prototype.find = function (modelID) {
        return this.apiAccountRuleDataLayer.find(modelID);
    };
    apiAccountRuleService.prototype.findAll = function () {
        return this.apiAccountRuleDataLayer.findAll();
    };
    apiAccountRuleService.prototype.findAllWith = function (query) {
        return this.apiAccountRuleDataLayer.findAllWith(query);
    };
    apiAccountRuleService.prototype.addItem = function (modelItem) {
        return this.apiAccountRuleDataLayer.addItem(modelItem);
    };
    apiAccountRuleService.prototype.removeItem = function (modelID) {
        return this.apiAccountRuleDataLayer.removeItem(modelID);
    };
    apiAccountRuleService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountRuleDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountRuleService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountPermissionDataRepository')),
        __param(1, inversify_1.inject('apiAccountRuleDataRepository'))
    ], apiAccountRuleService);
    return apiAccountRuleService;
}());
exports.apiAccountRuleService = apiAccountRuleService;
