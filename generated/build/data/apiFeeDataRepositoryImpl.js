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
var apiFee_1 = require("../models/apiFee");
//Linked Resources
var apiFeeDataRepositoryImpl = (function (_super) {
    __extends(apiFeeDataRepositoryImpl, _super);
    function apiFeeDataRepositoryImpl(requestDecorator) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
    }
    apiFeeDataRepositoryImpl.prototype.getModelType = function () {
        return apiFee_1.apiFee;
    };
    //TODO: This method probably must be removed/optional.
    apiFeeDataRepositoryImpl.prototype.getUrl = function () {
        return 'https://api.fundsrouter.com/fees;';
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{id} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiFeeDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelID), 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/fees', 'GET', null);
    };
    //Finds all entities
    apiFeeDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/fees/' + query, 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees', 'POST', modelItem);
    };
    apiFeeDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelID), 'DELETE', null);
    };
    apiFeeDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelId), 'PUT', modelItem);
    };
    apiFeeDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator'))
    ], apiFeeDataRepositoryImpl);
    return apiFeeDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiFeeDataRepositoryImpl = apiFeeDataRepositoryImpl;
