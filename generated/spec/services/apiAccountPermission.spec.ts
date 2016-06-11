import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountPermission} from "../../models/apiAccountPermission";
import {apiAccountPermissionService} from "../../services/apiAccountPermissionService";

describe("apiAccountPermissionService", () =>{

  var mockID : string = "testMockID";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountPermissionService;
  })

  it("should be resolved", () =>{
    expect(service.apiAccountPermissionDataLayer).toBeDefined();
  });

  describe("find", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "find");
      service.find(mockID);
      expect(service.apiAccountPermissionDataLayer.find).toHaveBeenCalledWith(mockID);
    });
  });

  describe("findAll", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "findAll");
      service.findAll();
      expect(service.apiAccountPermissionDataLayer.findAll).toHaveBeenCalled();
    });
  });

  describe("findAllWith", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "findAllWith");
      service.findAllWith(mockID);
      expect(service.apiAccountPermissionDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
    });
  });

  describe("addItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "addItem");
      service.addItem(mockID);
      expect(service.apiAccountPermissionDataLayer.addItem).toHaveBeenCalledWith(mockID);
    });
  });


  describe("removeItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "removeItem");
      service.removeItem(mockID);
      expect(service.apiAccountPermissionDataLayer.removeItem).toHaveBeenCalledWith(mockID);
    });
  });

  describe("saveItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountPermissionDataLayer, "saveItem");

      var model = new apiAccountPermission();

      service.saveItem(model, mockID);
      expect(service.apiAccountPermissionDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    });
  });

  //Custom methods:
  // describe("getAccount", () => {
  //   it("should call dataLayer", ()=>{
  //     spyOn(service.apiAccountPermissionDataLayer, "getAccount");
  //
  //     var model = new apiAccountPermission();
  //
  //     service.getAccount(model);
  //     expect(service.apiAccountPermissionDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
  //   });
  // });

});
