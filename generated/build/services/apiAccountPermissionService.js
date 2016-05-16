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
var apiAccountPermissionService = (function () {
    function apiAccountPermissionService(apiAccountRuleDataLayer, apiAccountDataLayer, apiAccountPermissionDataLayer) {
        this.apiAccountRuleDataLayer = apiAccountRuleDataLayer;
        this.apiAccountDataLayer = apiAccountDataLayer;
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
    }
    apiAccountPermissionService.prototype.find = function (modelID) {
        return this.apiAccountPermissionDataLayer.find(modelID);
    };
    apiAccountPermissionService.prototype.findAll = function () {
        return this.apiAccountPermissionDataLayer.findAll();
    };
    apiAccountPermissionService.prototype.findAllWith = function (query) {
        return this.apiAccountPermissionDataLayer.findAllWith(query);
    };
    apiAccountPermissionService.prototype.addItem = function (modelItem) {
        return this.apiAccountPermissionDataLayer.addItem(modelItem);
    };
    apiAccountPermissionService.prototype.removeItem = function (modelID) {
        return this.apiAccountPermissionDataLayer.removeItem(modelID);
    };
    apiAccountPermissionService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountPermissionDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountPermissionService.prototype.getAccountRule = function (modelItem) {
        return this.apiAccountPermissionDataLayer.getAccountRule(modelItem);
    };
    apiAccountPermissionService.prototype.getAccount = function (modelItem) {
        return this.apiAccountPermissionDataLayer.getAccount(modelItem);
    };
    apiAccountPermissionService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountRuleDataRepository')),
        __param(1, inversify_1.inject('apiAccountDataRepository')),
        __param(2, inversify_1.inject('apiAccountPermissionDataRepository'))
    ], apiAccountPermissionService);
    return apiAccountPermissionService;
}());
exports.apiAccountPermissionService = apiAccountPermissionService;
