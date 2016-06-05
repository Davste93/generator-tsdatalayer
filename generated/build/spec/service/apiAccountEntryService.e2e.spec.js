"use strict";
const serviceManager_1 = require("../../services/serviceManager");
const apiAccountEntry_1 = require("../../models/apiAccountEntry");
describe("ApiAccountEntryService E2E", () => {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(() => {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountEntryService;
    });
    describe("findAll", () => {
        it("should call dataLayer", () => {
            spyOn(service.apiAccountEntryDataLayer, "findAll");
            service.findAll();
            expect(service.apiAccountEntryDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", () => {
        it("should call dataLayer", () => {
            spyOn(service.apiAccountEntryDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiAccountEntryDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", () => {
        it("should call dataLayer", () => {
            spyOn(service.apiAccountEntryDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiAccountEntryDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", () => {
        it("should call dataLayer", () => {
            spyOn(service.apiAccountEntryDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiAccountEntryDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", () => {
        it("should call dataLayer", () => {
            spyOn(service.apiAccountEntryDataLayer, "saveItem");
            var model = new apiAccountEntry_1.apiAccountEntry();
            service.saveItem(model, mockID);
            expect(service.apiAccountEntryDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
});
