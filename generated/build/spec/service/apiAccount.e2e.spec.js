"use strict";
const serviceManager_1 = require("../../services/serviceManager");
const apiAccount_1 = require("../../models/apiAccount");
describe("ApiAccount E2E", () => {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(() => {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountService;
    });
    describe("findAll", () => {
        it("should keep type information", (done) => {
            service.findAll().then(apiAccountList => {
                var firstAccount = apiAccountList.first();
                if (apiAccountList.size() > 0) {
                    expect(firstAccount instanceof apiAccount_1.apiAccount).toBeTruthy();
                }
                done();
            }).catch(c => {
                console.log(c);
                done();
            });
        });
    });
});
