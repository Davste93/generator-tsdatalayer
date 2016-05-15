"use strict";
require('reflect-metadata');
var inversify_1 = require("inversify");
var apiFeeDataRepositoryImpl_1 = require('../data/apiFeeDataRepositoryImpl');
var apiAccountPermissionDataRepositoryImpl_1 = require('../data/apiAccountPermissionDataRepositoryImpl');
var apiAccountDataRepositoryImpl_1 = require('../data/apiAccountDataRepositoryImpl');
var apiAccountRuleDataRepositoryImpl_1 = require('../data/apiAccountRuleDataRepositoryImpl');
var apiAccountEntryDataRepositoryImpl_1 = require('../data/apiAccountEntryDataRepositoryImpl');
var apiAccountEntryService_1 = require('./apiAccountEntryService');
var kernel = null;
var ServiceManager = (function () {
    function ServiceManager() {
    }
    ServiceManager.bindDependentDataLayers = function () {
        //Data Layer bindings
        kernel.bind("apiFeeDataRepository").to(apiFeeDataRepositoryImpl_1.apiFeeDataRepositoryImpl);
        kernel.bind("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl_1.apiAccountPermissionDataRepositoryImpl);
        kernel.bind("apiAccountDataRepository").to(apiAccountDataRepositoryImpl_1.apiAccountDataRepositoryImpl);
        kernel.bind("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl_1.apiAccountRuleDataRepositoryImpl);
        kernel.bind("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl_1.apiAccountEntryDataRepositoryImpl);
    };
    ServiceManager.bindServices = function () {
        //Service bindings
        kernel.bind("apiAccountEntryService").to(apiAccountEntryService_1.apiAccountEntryService);
    };
    ServiceManager.resolveServices = function () {
        //Service resolve
        ServiceManager.apiAccountEntryService = kernel.get("apiAccountEntryService");
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
