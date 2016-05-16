"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountEntry_1 = require("../../models/apiAccountEntry");
describe("ApiAccountEntryService", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountEntryService;
    });
    it("should be resolved", function () {
        expect(service.apiAccountDataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "find");
            service.find(mockID);
            expect(service.apiAccountEntryDataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "findAll");
            service.findAll();
            expect(service.apiAccountEntryDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiAccountEntryDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiAccountEntryDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiAccountEntryDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountEntryDataLayer, "saveItem");
            var model = new apiAccountEntry_1.apiAccountEntry();
            service.saveItem(model, mockID);
            expect(service.apiAccountEntryDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.apiAccountEntryDataLayer, "getAccount");
    //
    //     var model = new apiAccountEntry();
    //
    //     service.getAccount(model);
    //     expect(service.apiAccountEntryDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
