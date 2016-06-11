import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountRule} from "../../models/apiAccountRule";
import {apiAccountRuleService} from "../../services/apiAccountRuleService";

describe("apiAccountRuleService", () =>{

  var mockID : string = "testMockID";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountRuleService;
  })

  it("should be resolved", () =>{
    expect(service.apiAccountRuleDataLayer).toBeDefined();
  });

  describe("find", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "find");
      service.find(mockID);
      expect(service.apiAccountRuleDataLayer.find).toHaveBeenCalledWith(mockID);
    });
  });

  describe("findAll", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "findAll");
      service.findAll();
      expect(service.apiAccountRuleDataLayer.findAll).toHaveBeenCalled();
    });
  });

  describe("findAllWith", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "findAllWith");
      service.findAllWith(mockID);
      expect(service.apiAccountRuleDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
    });
  });

  describe("addItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "addItem");
      service.addItem(mockID);
      expect(service.apiAccountRuleDataLayer.addItem).toHaveBeenCalledWith(mockID);
    });
  });


  describe("removeItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "removeItem");
      service.removeItem(mockID);
      expect(service.apiAccountRuleDataLayer.removeItem).toHaveBeenCalledWith(mockID);
    });
  });

  describe("saveItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountRuleDataLayer, "saveItem");

      var model = new apiAccountRule();

      service.saveItem(model, mockID);
      expect(service.apiAccountRuleDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    });
  });

  //Custom methods:
  // describe("getAccount", () => {
  //   it("should call dataLayer", ()=>{
  //     spyOn(service.apiAccountRuleDataLayer, "getAccount");
  //
  //     var model = new apiAccountRule();
  //
  //     service.getAccount(model);
  //     expect(service.apiAccountRuleDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
  //   });
  // });

});
