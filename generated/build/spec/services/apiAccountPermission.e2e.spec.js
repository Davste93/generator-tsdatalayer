"use strict";
const serviceManager_1 = require("../../services/serviceManager");
const apiAccountPermission_1 = require("../../models/apiAccountPermission");
describe("apiAccountPermission E2E", () => {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(() => {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountPermissionService;
    });
    describe("findAll", () => {
        it("should keep type information", (done) => {
            service.findAll().then(apiAccountPermissionList => {
                var firstModel = apiAccountPermissionList.first();
                if (apiAccountPermissionList.size() > 0) {
                    expect(firstModel instanceof apiAccountPermission_1.apiAccountPermission).toBeTruthy();
                    console.log(firstModel);
                }
                else {
                    console.warn("E2E test for apiAccountPermission is of size 0.");
                }
                done();
            }).catch(c => {
                done();
            });
        });
    });
});
