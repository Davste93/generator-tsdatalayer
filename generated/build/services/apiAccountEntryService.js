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
var apiAccountEntryService = (function () {
    function apiAccountEntryService(apiAccountDataLayer, apiAccountEntryDataLayer) {
        this.apiAccountDataLayer = apiAccountDataLayer;
        this.apiAccountEntryDataLayer = apiAccountEntryDataLayer;
    }
    apiAccountEntryService.prototype.find = function (modelID) {
        return this.apiAccountEntryDataLayer.find(modelID);
    };
    apiAccountEntryService.prototype.findAll = function () {
        return this.apiAccountEntryDataLayer.findAll();
    };
    apiAccountEntryService.prototype.findAllWith = function (query) {
        return this.apiAccountEntryDataLayer.findAllWith(query);
    };
    apiAccountEntryService.prototype.addItem = function (modelItem) {
        return this.apiAccountEntryDataLayer.addItem(modelItem);
    };
    apiAccountEntryService.prototype.removeItem = function (modelID) {
        return this.apiAccountEntryDataLayer.removeItem(modelID);
    };
    apiAccountEntryService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountEntryDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountEntryService.prototype.getAccount = function (modelItem) {
        return this.apiAccountEntryDataLayer.getAccount(modelItem);
    };
    apiAccountEntryService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountDataRepository')),
        __param(1, inversify_1.inject('apiAccountEntryDataRepository'))
    ], apiAccountEntryService);
    return apiAccountEntryService;
}());
exports.apiAccountEntryService = apiAccountEntryService;
