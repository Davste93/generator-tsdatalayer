"use strict";
var ServiceManager_1 = require("../../services/ServiceManager");
describe("ApiAccountEntryService", function () {
    var service;
    beforeEach(function () {
        ServiceManager_1.ServiceManager.initialize();
    });
    it("should be resolved", function () {
        expect(ServiceManager_1.ServiceManager.apiAccountEntryService).toBeDefined();
    });
    describe("find", function () {
    });
});
