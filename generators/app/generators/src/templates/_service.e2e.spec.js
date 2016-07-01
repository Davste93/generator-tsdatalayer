"use strict";
var tsmvc_1 = require("tsmvc");
var serviceManager_1 = require("../../services/serviceManager");
model.name %  > ;
from;
"../../models/<%=model.name%>";
model.name %  > tsmvc_1.Service;
from;
"../../services/<%=model.name%>Service";
describe("<%=model.name%> E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager. < ;
        model.name %  > tsmvc_1.Service;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(, model.name %  > List, {
                var: firstModel = , model: .name %  > List.first(),
                if: function () { } } < , model.name %  > List.size() > 0);
            {
                expect(firstModel instanceof , model.name %  > ).toBeTruthy();
            }
            {
            }
            done();
        }).catch(function (c) {
            done();
        });
    });
});
;
