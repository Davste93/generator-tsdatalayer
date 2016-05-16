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
var apiAccountService = (function () {
    function apiAccountService(apiAccountEntryDataLayer, apiAccountPermissionDataLayer, apiAccountDataLayer) {
        this.apiAccountEntryDataLayer = apiAccountEntryDataLayer;
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
        this.apiAccountDataLayer = apiAccountDataLayer;
    }
    apiAccountService.prototype.find = function (modelID) {
        return this.apiAccountDataLayer.find(modelID);
    };
    apiAccountService.prototype.findAll = function () {
        return this.apiAccountDataLayer.findAll();
    };
    apiAccountService.prototype.findAllWith = function (query) {
        return this.apiAccountDataLayer.findAllWith(query);
    };
    apiAccountService.prototype.addItem = function (modelItem) {
        return this.apiAccountDataLayer.addItem(modelItem);
    };
    apiAccountService.prototype.removeItem = function (modelID) {
        return this.apiAccountDataLayer.removeItem(modelID);
    };
    apiAccountService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountService.prototype.getAccountEntries = function (modelItem) {
        return this.apiAccountDataLayer.getAccountEntries(modelItem);
    };
    apiAccountService.prototype.getAccountPermissions = function (modelItem) {
        return this.apiAccountDataLayer.getAccountPermissions(modelItem);
    };
    apiAccountService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountEntryDataRepository')),
        __param(1, inversify_1.inject('apiAccountPermissionDataRepository')),
        __param(2, inversify_1.inject('apiAccountDataRepository'))
    ], apiAccountService);
    return apiAccountService;
}());
exports.apiAccountService = apiAccountService;
