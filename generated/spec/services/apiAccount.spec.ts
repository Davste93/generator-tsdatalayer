import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccount} from "../../models/apiAccount";
import {apiAccountService} from "../../services/apiAccountService";

describe("apiAccountService", () =>{

  var mockID : string = "testMockID";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountService;
  })

  it("should be resolved", () =>{
    expect(service.apiAccountDataLayer).toBeDefined();
  });

  describe("find", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "find");
      service.find(mockID);
      expect(service.apiAccountDataLayer.find).toHaveBeenCalledWith(mockID);
    });
  });

  describe("findAll", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "findAll");
      service.findAll();
      expect(service.apiAccountDataLayer.findAll).toHaveBeenCalled();
    });
  });

  describe("findAllWith", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "findAllWith");
      service.findAllWith(mockID);
      expect(service.apiAccountDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
    });
  });

  describe("addItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "addItem");
      service.addItem(mockID);
      expect(service.apiAccountDataLayer.addItem).toHaveBeenCalledWith(mockID);
    });
  });


  describe("removeItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "removeItem");
      service.removeItem(mockID);
      expect(service.apiAccountDataLayer.removeItem).toHaveBeenCalledWith(mockID);
    });
  });

  describe("saveItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountDataLayer, "saveItem");

      var model = new apiAccount();

      service.saveItem(model, mockID);
      expect(service.apiAccountDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    });
  });

  //Custom methods:
  // describe("getAccount", () => {
  //   it("should call dataLayer", ()=>{
  //     spyOn(service.apiAccountDataLayer, "getAccount");
  //
  //     var model = new apiAccount();
  //
  //     service.getAccount(model);
  //     expect(service.apiAccountDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
  //   });
  // });

});
