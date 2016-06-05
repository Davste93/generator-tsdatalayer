"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiAccountEntry_1 = require("../models/apiAccountEntry");
var apiAccountEntryDataRepositoryImpl = (function (_super) {
    __extends(apiAccountEntryDataRepositoryImpl, _super);
    function apiAccountEntryDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiAccountEntryDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountEntry_1.apiAccountEntry;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountEntryDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountentries', 'GET', null);
    };
    //Finds all entities
    apiAccountEntryDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountentries/' + query, 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries', 'POST', modelItem);
    };
    apiAccountEntryDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    apiAccountEntryDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser'))
    ], apiAccountEntryDataRepositoryImpl);
    return apiAccountEntryDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountEntryDataRepositoryImpl = apiAccountEntryDataRepositoryImpl;
