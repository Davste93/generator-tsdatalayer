"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var inversify_1 = require("inversify");
var apiFeeService = (function () {
    function apiFeeService(apiFeeDataLayer) {
        this.apiFeeDataLayer = apiFeeDataLayer;
    }
    apiFeeService.prototype.find = function (modelID) {
        return this.apiFeeDataLayer.find(modelID);
    };
    apiFeeService.prototype.findAll = function () {
        return this.apiFeeDataLayer.findAll();
    };
    apiFeeService.prototype.findAllWith = function (query) {
        return this.apiFeeDataLayer.findAllWith(query);
    };
    apiFeeService.prototype.addItem = function (modelItem) {
        return this.apiFeeDataLayer.addItem(modelItem);
    };
    apiFeeService.prototype.removeItem = function (modelID) {
        return this.apiFeeDataLayer.removeItem(modelID);
    };
    apiFeeService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiFeeDataLayer.saveItem(modelItem, modelId);
    };
    apiFeeService = __decorate([
        inversify_1.inject('apiFee')
    ], apiFeeService);
    return apiFeeService;
}());
exports.apiFeeService = apiFeeService;
