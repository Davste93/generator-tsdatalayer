"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
//Current Import
var apiAccount_1 = require("../models/apiAccount");
var apiAccountDataRepositoryImpl = (function (_super) {
    __extends(apiAccountDataRepositoryImpl, _super);
    function apiAccountDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    apiAccountDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccount_1.apiAccount;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountDataRepositoryImpl.prototype.getUrl = function () {
        return 'http://api.fundsrouter.com/profile/accounts;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accounts', 'GET', null);
    };
    //Finds all entities 
    apiAccountDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accounts/' + query, 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accounts/{id}/', 'POST', modelItem);
    };
    apiAccountDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountDataRepositoryImpl.prototype.saveItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accounts/{id}/', 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountDataRepositoryImpl.prototype.getAccountEntries = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountEntries, 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.getAccountPermissions = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountPermissions, 'GET', null);
    };
    return apiAccountDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountDataRepositoryImpl = apiAccountDataRepositoryImpl;
