"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
//Current Import
var apiAccountRule_1 = require("../models/apiAccountRule");
var apiAccountRuleDataRepositoryImpl = (function (_super) {
    __extends(apiAccountRuleDataRepositoryImpl, _super);
    function apiAccountRuleDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    apiAccountRuleDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountRule_1.apiAccountRule;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountRuleDataRepositoryImpl.prototype.getUrl = function () {
        return 'http://api.fundsrouter.com/profile/accountrules;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountRuleDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountrules', 'GET', null);
    };
    //Finds all entities 
    apiAccountRuleDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountrules/' + query, 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountrules/{id}/', 'POST', modelItem);
    };
    apiAccountRuleDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.saveItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountrules/{id}/', 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountRuleDataRepositoryImpl.prototype.getAccountPermissions = function (modelItem) {
        return this.buildRequestAndParseAsTList(modelItem.accountPermissions, 'GET', null);
    };
    return apiAccountRuleDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountRuleDataRepositoryImpl = apiAccountRuleDataRepositoryImpl;
