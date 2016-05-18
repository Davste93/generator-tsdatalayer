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
var apiAccountPermission_1 = require("../models/apiAccountPermission");
var apiAccountPermissionDataRepositoryImpl = (function (_super) {
    __extends(apiAccountPermissionDataRepositoryImpl, _super);
    function apiAccountPermissionDataRepositoryImpl(requestDecorator) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
    }
    apiAccountPermissionDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountPermission_1.apiAccountPermission;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountPermissionDataRepositoryImpl.prototype.getUrl = function () {
        return 'https://api.fundsrouter.com/accountpermissions;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountPermissionDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountpermissions', 'GET', null);
    };
    //Finds all entities
    apiAccountPermissionDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountpermissions/' + query, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions', 'POST', modelItem);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountPermissionDataRepositoryImpl.prototype.getAccountRule = function (modelItem) {
        return this.buildRequestAndParseAsT(modelItem.accountRule, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.getAccount = function (modelItem) {
        return this.buildRequestAndParseAsT(modelItem.account, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator'))
    ], apiAccountPermissionDataRepositoryImpl);
    return apiAccountPermissionDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountPermissionDataRepositoryImpl = apiAccountPermissionDataRepositoryImpl;
