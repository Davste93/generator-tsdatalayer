"use strict";
var inversify_1 = require("inversify");
var apiAccountEntryDataRepositoryImpl_1 = require('../data/apiAccountEntryDataRepositoryImpl');
var apiAccountEntryService_1 = require('./apiAccountEntryService');
var apiFeeDataRepositoryImpl_1 = require('../data/apiFeeDataRepositoryImpl');
var apiFeeService_1 = require('./apiFeeService');
var apiAccountDataRepositoryImpl_1 = require('../data/apiAccountDataRepositoryImpl');
var apiAccountService_1 = require('./apiAccountService');
var apiAccountRuleDataRepositoryImpl_1 = require('../data/apiAccountRuleDataRepositoryImpl');
var apiAccountRuleService_1 = require('./apiAccountRuleService');
var apiAccountPermissionDataRepositoryImpl_1 = require('../data/apiAccountPermissionDataRepositoryImpl');
var apiAccountPermissionService_1 = require('./apiAccountPermissionService');
//INIT:  This is the composition root: http://blog.ploeh.dk/2011/07/28/CompositionRoot/
//The injector should imported on app init.
var kernel = new inversify_1.Kernel();
var Services = (function () {
    function Services() {
    }
    return Services;
}());
//Data Layer bindings
kernel.bind("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl_1.apiAccountEntryDataRepositoryImpl);
kernel.bind("apiFeeDataRepository").to(apiFeeDataRepositoryImpl_1.apiFeeDataRepositoryImpl);
kernel.bind("apiAccountDataRepository").to(apiAccountDataRepositoryImpl_1.apiAccountDataRepositoryImpl);
kernel.bind("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl_1.apiAccountRuleDataRepositoryImpl);
kernel.bind("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl_1.apiAccountPermissionDataRepositoryImpl);
//Service bindings
kernel.bind("apiAccountEntryService").to(apiAccountEntryService_1.apiAccountEntryService);
kernel.bind("apiFeeService").to(apiFeeService_1.apiFeeService);
kernel.bind("apiAccountService").to(apiAccountService_1.apiAccountService);
kernel.bind("apiAccountRuleService").to(apiAccountRuleService_1.apiAccountRuleService);
kernel.bind("apiAccountPermissionService").to(apiAccountPermissionService_1.apiAccountPermissionService);
//Service resolve
Services.apiAccountEntryService = kernel.get("apiAccountEntryService");
Services.apiFeeService = kernel.get("apiFeeService");
Services.apiAccountService = kernel.get("apiAccountService");
Services.apiAccountRuleService = kernel.get("apiAccountRuleService");
Services.apiAccountPermissionService = kernel.get("apiAccountPermissionService");
