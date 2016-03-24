"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
//Current Import
var apiAccountPermission_1 = require("../models/apiAccountPermission");
var apiAccountPermissionDataRepositoryImpl = (function (_super) {
    __extends(apiAccountPermissionDataRepositoryImpl, _super);
    function apiAccountPermissionDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    apiAccountPermissionDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountPermission_1.apiAccountPermission;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountPermissionDataRepositoryImpl.prototype.getUrl = function () {
        return 'http://api.fundsrouter.com/profile/accountpermissions;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountPermissionDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountpermissions', 'GET', null);
    };
    //Finds all entities
    apiAccountPermissionDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountpermissions/' + query, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountpermissions', 'POST', modelItem);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountPermissionDataRepositoryImpl.prototype.getAccountRule = function (modelItem) {
        return this.buildRequestAndParseAsT(modelItem.accountRule, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.getAccount = function (modelItem) {
        return this.buildRequestAndParseAsT(modelItem.account, 'GET', null);
    };
    return apiAccountPermissionDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountPermissionDataRepositoryImpl = apiAccountPermissionDataRepositoryImpl;
