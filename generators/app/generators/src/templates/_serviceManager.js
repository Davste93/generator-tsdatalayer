"use strict";
require('reflect-metadata');
var inversify_1 = require("inversify");
var BasicAuth_1 = require("../Auth/BasicAuth");
 % -models.map(function (d) {
    if (!d.isDepEntity)
        return "import {" + d.name + "DataRepository} from '../data/" + d.name + "DataRepository';\nimport {" + d.name + "DataRepositoryImpl} from '../data/" + d.name + "DataRepositoryImpl';\nimport {" + d.name + "Service} from './" + d.name + "Service';\n";
}).join('');
 %  >
;
var HateoasResponseParser_ts_1 = require('../ApiResponseParsers/HateoasResponseParser.ts'); //TODO: REMOVE!
var kernel = null;
var ServiceManager = (function () {
    function ServiceManager() {
    }
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
 % -models.map(function (d) {
    if (!d.isDepEntity)
        return "\tpublic static " + d.name + "Service : " + d.name + "Service;\n";
}).join('');
- %  >
    static;
bindDependentDataLayers();
{
    //Data Layer bindings
     % -models.map(function (d) { if (!d.isDepEntity)
        return "\t\tkernel.bind<" + d.name + "DataRepository>(\"" + d.name + "DataRepository\").to(" + d.name + "DataRepositoryImpl);\n"; }).join('');
     %  >
    ;
}
bindServices();
{
    //Service bindings
     % -models.map(function (d) { if (!d.isDepEntity)
        return "\t\tkernel.bind<" + d.name + "Service>(\"" + d.name + "Service\").to(" + d.name + "Service);\n"; }).join('');
     %  >
    ;
}
resolveServices();
{
    //Service resolve
     % -models.map(function (d) { if (!d.isDepEntity)
        return "\t\tServiceManager." + d.name + "Service = kernel.get<" + d.name + "Service>(\"" + d.name + "Service\");\n"; }).join('');
     %  >
    ;
}
bindDecorators();
{
    kernel.bind("ApiRequestDecorator").to(BasicAuth_1.BasicAuthDecorator);
    kernel.bind("string").toConstantValue("test").whenTargetNamed("username");
    kernel.bind("string").toConstantValue("test").whenTargetNamed("password");
}
bindParsers();
{
    kernel.bind("Parser").to(HateoasResponseParser_ts_1.HateoasResponseParser).when(function (request) {
        return true; // return request.parentRequest.serviceIdentifier === 'DogDataRepository'; //TODO: temporary
    });
}
initialize();
{
    if (kernel != null) {
        return;
    }
    kernel = new inversify_1.Kernel();
    ServiceManager.bindParsers();
    ServiceManager.bindDependentDataLayers();
    ServiceManager.bindServices();
    ServiceManager.bindDecorators();
    ServiceManager.resolveServices();
}
ServiceManager.initialize();
