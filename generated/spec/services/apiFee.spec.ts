import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiFee} from "../../models/apiFee";
import {apiFeeService} from "../../services/apiFeeService";

describe("apiFeeService", () =>{

  var mockID : string = "testMockID";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiFeeService;
  })

  it("should be resolved", () =>{
    expect(service.apiFeeDataLayer).toBeDefined();
  });

  describe("find", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "find");
      service.find(mockID);
      expect(service.apiFeeDataLayer.find).toHaveBeenCalledWith(mockID);
    });
  });

  describe("findAll", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "findAll");
      service.findAll();
      expect(service.apiFeeDataLayer.findAll).toHaveBeenCalled();
    });
  });

  describe("findAllWith", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "findAllWith");
      service.findAllWith(mockID);
      expect(service.apiFeeDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
    });
  });

  describe("addItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "addItem");
      service.addItem(mockID);
      expect(service.apiFeeDataLayer.addItem).toHaveBeenCalledWith(mockID);
    });
  });


  describe("removeItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "removeItem");
      service.removeItem(mockID);
      expect(service.apiFeeDataLayer.removeItem).toHaveBeenCalledWith(mockID);
    });
  });

  describe("saveItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiFeeDataLayer, "saveItem");

      var model = new apiFee();

      service.saveItem(model, mockID);
      expect(service.apiFeeDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    });
  });

  //Custom methods:
  // describe("getAccount", () => {
  //   it("should call dataLayer", ()=>{
  //     spyOn(service.apiFeeDataLayer, "getAccount");
  //
  //     var model = new apiFee();
  //
  //     service.getAccount(model);
  //     expect(service.apiFeeDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
  //   });
  // });

});
