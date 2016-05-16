"use strict";
require('reflect-metadata');
var inversify_1 = require("inversify");
var apiAccountRuleDataRepositoryImpl_1 = require('../data/apiAccountRuleDataRepositoryImpl');
var apiAccountRuleService_1 = require('./apiAccountRuleService');
var apiFeeDataRepositoryImpl_1 = require('../data/apiFeeDataRepositoryImpl');
var apiFeeService_1 = require('./apiFeeService');
var apiAccountPermissionDataRepositoryImpl_1 = require('../data/apiAccountPermissionDataRepositoryImpl');
var apiAccountPermissionService_1 = require('./apiAccountPermissionService');
var apiAccountEntryDataRepositoryImpl_1 = require('../data/apiAccountEntryDataRepositoryImpl');
var apiAccountEntryService_1 = require('./apiAccountEntryService');
var apiAccountDataRepositoryImpl_1 = require('../data/apiAccountDataRepositoryImpl');
var apiAccountService_1 = require('./apiAccountService');
var kernel = null;
var ServiceManager = (function () {
    function ServiceManager() {
    }
    ServiceManager.bindDependentDataLayers = function () {
        //Data Layer bindings
        kernel.bind("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl_1.apiAccountRuleDataRepositoryImpl);
        kernel.bind("apiFeeDataRepository").to(apiFeeDataRepositoryImpl_1.apiFeeDataRepositoryImpl);
        kernel.bind("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl_1.apiAccountPermissionDataRepositoryImpl);
        kernel.bind("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl_1.apiAccountEntryDataRepositoryImpl);
        kernel.bind("apiAccountDataRepository").to(apiAccountDataRepositoryImpl_1.apiAccountDataRepositoryImpl);
    };
    ServiceManager.bindServices = function () {
        //Service bindings
        kernel.bind("apiAccountRuleService").to(apiAccountRuleService_1.apiAccountRuleService);
        kernel.bind("apiFeeService").to(apiFeeService_1.apiFeeService);
        kernel.bind("apiAccountPermissionService").to(apiAccountPermissionService_1.apiAccountPermissionService);
        kernel.bind("apiAccountEntryService").to(apiAccountEntryService_1.apiAccountEntryService);
        kernel.bind("apiAccountService").to(apiAccountService_1.apiAccountService);
    };
    ServiceManager.resolveServices = function () {
        //Service resolve
        ServiceManager.apiAccountRuleService = kernel.get("apiAccountRuleService");
        ServiceManager.apiFeeService = kernel.get("apiFeeService");
        ServiceManager.apiAccountPermissionService = kernel.get("apiAccountPermissionService");
        ServiceManager.apiAccountEntryService = kernel.get("apiAccountEntryService");
        ServiceManager.apiAccountService = kernel.get("apiAccountService");
    };
    //Equivalent of static constructor, called when this class is imported.
    ServiceManager.initialize = function () {
        if (kernel != null) {
            return;
        }
        kernel = new inversify_1.Kernel();
        ServiceManager.bindDependentDataLayers();
        ServiceManager.bindServices();
        ServiceManager.resolveServices();
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
ServiceManager.initialize();
