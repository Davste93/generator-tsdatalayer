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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
var apiAccount_1 = require("../models/apiAccount");
var apiAccountDataRepositoryImpl = (function (_super) {
    __extends(apiAccountDataRepositoryImpl, _super);
    function apiAccountDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.parser = requestParser;
        this.requestDecorator = requestDecorator;
    }
    apiAccountDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccount_1.apiAccount;
    };
    apiAccountDataRepositoryImpl.prototype.getUrl = function () {
        return 'https://api.fundsrouter.com/accounts;';
    };
    apiAccountDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accounts', 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accounts/' + query, 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts', 'POST', modelItem);
    };
    apiAccountDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    apiAccountDataRepositoryImpl.prototype.getAccountEntries = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountEntries, 'GET', null, this.parser);
    };
    apiAccountDataRepositoryImpl.prototype.getAccountPermissions = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountPermissions, 'GET', null);
    };
    apiAccountDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountDataRepositoryImpl);
    return apiAccountDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountDataRepositoryImpl = apiAccountDataRepositoryImpl;
