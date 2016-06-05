"use strict";
var serviceManager_1 = require("../../services/serviceManager");
describe("ApiAccount E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountService;
    });
    describe("find", function () {
        it("should call dataLayer", function (done) {
            service.findAll().then(function (f) {
                console.log(f);
                debugger;
                done();
            }).catch(function (c) {
                console.log(c);
                done();
            });
        });
    });
});
