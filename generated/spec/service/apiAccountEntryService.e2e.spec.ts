import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountEntry} from "../../models/apiAccountEntry";
import {apiAccountEntryService} from "../../services/apiAccountEntryService";

describe("ApiAccountEntryService E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountEntryService;
  })


  // describe("find", () => {
  //   it("should call dataLayer", (done)=>{
  //     service.findAll().then(f => {
  //       console.log(f);
  //       done();
  //     }).catch(c => {
  //       console.log(c);
  //       done();
  //     });
  //   });
  // });

  describe("findAll", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountEntryDataLayer, "findAll");
      service.findAll();
      expect(service.apiAccountEntryDataLayer.findAll).toHaveBeenCalled();
    });
  });

  describe("findAllWith", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountEntryDataLayer, "findAllWith");
      service.findAllWith(mockID);
      expect(service.apiAccountEntryDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
    });
  });

  describe("addItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountEntryDataLayer, "addItem");
      service.addItem(mockID);
      expect(service.apiAccountEntryDataLayer.addItem).toHaveBeenCalledWith(mockID);
    });
  });


  describe("removeItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountEntryDataLayer, "removeItem");
      service.removeItem(mockID);
      expect(service.apiAccountEntryDataLayer.removeItem).toHaveBeenCalledWith(mockID);
    });
  });

  describe("saveItem", () => {
    it("should call dataLayer", ()=>{
      spyOn(service.apiAccountEntryDataLayer, "saveItem");

      var model = new apiAccountEntry();

      service.saveItem(model, mockID);
      expect(service.apiAccountEntryDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    });
  });
});
