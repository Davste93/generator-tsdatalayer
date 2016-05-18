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
var apiAccountRule_1 = require("../models/apiAccountRule");
var apiAccountRuleDataRepositoryImpl = (function (_super) {
    __extends(apiAccountRuleDataRepositoryImpl, _super);
    function apiAccountRuleDataRepositoryImpl(requestDecorator) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
    }
    apiAccountRuleDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountRule_1.apiAccountRule;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountRuleDataRepositoryImpl.prototype.getUrl = function () {
        return 'https://api.fundsrouter.com/accountrules;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountRuleDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountrules', 'GET', null);
    };
    //Finds all entities
    apiAccountRuleDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountrules/' + query, 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules', 'POST', modelItem);
    };
    apiAccountRuleDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountRuleDataRepositoryImpl.prototype.getAccountPermissions = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountPermissions, 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator'))
    ], apiAccountRuleDataRepositoryImpl);
    return apiAccountRuleDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountRuleDataRepositoryImpl = apiAccountRuleDataRepositoryImpl;
