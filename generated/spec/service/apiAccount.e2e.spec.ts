import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountEntry} from "../../models/apiAccountEntry";
import {apiAccountEntryService} from "../../services/apiAccountEntryService";

describe("ApiAccount E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountService;
  })


  describe("find", () => {
    it("should call dataLayer", (done)=>{
      service.findAll().then(f => {
        console.log(f);
        debugger;
        done();
      }).catch(c =>  {
        console.log(c);
        done();
      });
    });
  });

});
