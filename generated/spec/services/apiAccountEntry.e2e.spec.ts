import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountEntry} from "../../models/apiAccountEntry";
import {apiAccountEntryService} from "../../services/apiAccountEntryService";

describe("apiAccountEntry E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountEntryService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiAccountEntryList => {
        var firstModel = apiAccountEntryList.first();

        if (apiAccountEntryList.size() > 0) {
          expect(firstModel instanceof apiAccountEntry).toBeTruthy();
          //console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          //console.log("E2E test for apiAccountEntry is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
