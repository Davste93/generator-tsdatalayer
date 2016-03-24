"use strict";
var inversify_1 = require("inversify");
var apiAccountDataRepositoryImpl_1 = require('../data/apiAccountDataRepositoryImpl');
var kernel = new inversify_1.Kernel();
kernel.bind("apiAccountDataRepository").to(apiAccountDataRepositoryImpl_1.apiAccountDataRepositoryImpl);
var Services = (function () {
    function Services() {
    }
    return Services;
}());
