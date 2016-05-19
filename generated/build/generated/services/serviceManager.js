"use strict";
require('reflect-metadata');
var inversify_1 = require("inversify");
var BasicAuth_1 = require("../Auth/BasicAuth");
var apiAccountEntryDataRepositoryImpl_1 = require('../data/apiAccountEntryDataRepositoryImpl');
var apiAccountEntryService_1 = require('./apiAccountEntryService');
var apiAccountRuleDataRepositoryImpl_1 = require('../data/apiAccountRuleDataRepositoryImpl');
var apiAccountRuleService_1 = require('./apiAccountRuleService');
var apiAccountPermissionDataRepositoryImpl_1 = require('../data/apiAccountPermissionDataRepositoryImpl');
var apiAccountPermissionService_1 = require('./apiAccountPermissionService');
var apiFeeDataRepositoryImpl_1 = require('../data/apiFeeDataRepositoryImpl');
var apiFeeService_1 = require('./apiFeeService');
var apiAccountDataRepositoryImpl_1 = require('../data/apiAccountDataRepositoryImpl');
var apiAccountService_1 = require('./apiAccountService');
var kernel = null;
var ServiceManager = (function () {
    function ServiceManager() {
    }
    ServiceManager.bindDependentDataLayers = function () {
        kernel.bind("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl_1.apiAccountEntryDataRepositoryImpl);
        kernel.bind("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl_1.apiAccountRuleDataRepositoryImpl);
        kernel.bind("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl_1.apiAccountPermissionDataRepositoryImpl);
        kernel.bind("apiFeeDataRepository").to(apiFeeDataRepositoryImpl_1.apiFeeDataRepositoryImpl);
        kernel.bind("apiAccountDataRepository").to(apiAccountDataRepositoryImpl_1.apiAccountDataRepositoryImpl);
    };
    ServiceManager.bindServices = function () {
        kernel.bind("apiAccountEntryService").to(apiAccountEntryService_1.apiAccountEntryService);
        kernel.bind("apiAccountRuleService").to(apiAccountRuleService_1.apiAccountRuleService);
        kernel.bind("apiAccountPermissionService").to(apiAccountPermissionService_1.apiAccountPermissionService);
        kernel.bind("apiFeeService").to(apiFeeService_1.apiFeeService);
        kernel.bind("apiAccountService").to(apiAccountService_1.apiAccountService);
    };
    ServiceManager.resolveServices = function () {
        ServiceManager.apiAccountEntryService = kernel.get("apiAccountEntryService");
        ServiceManager.apiAccountRuleService = kernel.get("apiAccountRuleService");
        ServiceManager.apiAccountPermissionService = kernel.get("apiAccountPermissionService");
        ServiceManager.apiFeeService = kernel.get("apiFeeService");
        ServiceManager.apiAccountService = kernel.get("apiAccountService");
    };
    ServiceManager.bindDecorators = function () {
        kernel.bind("ApiRequestDecorator").to(BasicAuth_1.BasicAuthDecorator);
        kernel.bind("string").toConstantValue("test").whenTargetNamed("username");
        kernel.bind("string").toConstantValue("test").whenTargetNamed("password");
    };
    ServiceManager.bindParsers = function () {
        kernel.bind("ApiRequestDecorator").to(BasicAuth_1.BasicAuthDecorator);
    };
    ServiceManager.initialize = function () {
        if (kernel != null) {
            return;
        }
        kernel = new inversify_1.Kernel();
        ServiceManager.bindDependentDataLayers();
        ServiceManager.bindServices();
        ServiceManager.bindDecorators();
        ServiceManager.resolveServices();
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
ServiceManager.initialize();
