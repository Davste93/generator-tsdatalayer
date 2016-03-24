"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
//Current Import
var apiAccountEntry_1 = require("../models/apiAccountEntry");
var apiAccountEntryDataRepositoryImpl = (function (_super) {
    __extends(apiAccountEntryDataRepositoryImpl, _super);
    function apiAccountEntryDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    apiAccountEntryDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountEntry_1.apiAccountEntry;
    };
    //TODO: This method probably must be removed/optional.
    apiAccountEntryDataRepositoryImpl.prototype.getUrl = function () {
        return 'http://api.fundsrouter.com/profile/accountentries;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountEntryDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountentries', 'GET', null);
    };
    //Finds all entities
    apiAccountEntryDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/accountentries/' + query, 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountentries', 'POST', modelItem);
    };
    apiAccountEntryDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    //Dynamically generated operations from linked resources (the exciting part)
    apiAccountEntryDataRepositoryImpl.prototype.getAccount = function (modelItem) {
        return this.buildRequestAndParseAsT(modelItem.account, 'GET', null);
    };
    return apiAccountEntryDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountEntryDataRepositoryImpl = apiAccountEntryDataRepositoryImpl;
