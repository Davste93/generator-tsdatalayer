"use strict";
var tsmvc_1 = require("tsmvc");
var serviceManager_1 = require("../../services/serviceManager");
model.name %  > ;
from;
"../../models/<%=model.name%>";
model.name %  > tsmvc_1.Service;
from;
"../../services/<%=model.name%>Service";
describe("<%=model.name%>Service", function () {
    var mockID = "testMockID";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager. < ;
        model.name %  > tsmvc_1.Service;
    });
    it("should be resolved", function () {
        expect(service. < , model.name %  > DataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "find");
            service.find(mockID);
            expect(service. < , model.name %  > DataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "findAll");
            service.findAll();
            expect(service. < , model.name %  > DataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service. < , model.name %  > DataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "addItem");
            service.addItem(mockID);
            expect(service. < , model.name %  > DataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service. < , model.name %  > DataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service. < , model.name %  > DataLayer, "saveItem");
            var model = new  < , model, name =  %  > ();
            service.saveItem(model, mockID);
            expect(service. < , model.name %  > DataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.<%=model.name%>DataLayer, "getAccount");
    //
    //     var model = new <%=model.name%>();
    //
    //     service.getAccount(model);
    //     expect(service.<%=model.name%>DataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
