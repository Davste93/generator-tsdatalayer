"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
//Current Import
var apiFee_1 = require("../models/apiFee");
/*import apiFeeDataRepository from "./apiFeeDataRepository";*/
//Linked Resources
var apiFeeDataRepositoryImpl = (function (_super) {
    __extends(apiFeeDataRepositoryImpl, _super);
    function apiFeeDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    apiFeeDataRepositoryImpl.prototype.getModelType = function () {
        return apiFee_1.apiFee;
    };
    //TODO: This method probably must be removed/optional.
    apiFeeDataRepositoryImpl.prototype.getUrl = function () {
        return 'http://api.fundsrouter.com/profile/fees;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiFeeDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/fees', 'GET', null);
    };
    //Finds all entities 
    apiFeeDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('http://api.fundsrouter.com/profile/fees/' + query, 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/fees/{id}/', 'POST', modelItem);
    };
    apiFeeDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiFeeDataRepositoryImpl.prototype.saveItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('http://api.fundsrouter.com/profile/fees/{id}/', 'PUT', modelItem);
    };
    return apiFeeDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiFeeDataRepositoryImpl = apiFeeDataRepositoryImpl;
