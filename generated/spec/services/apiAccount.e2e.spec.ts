import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccount} from "../../models/apiAccount";
import {apiAccountService} from "../../services/apiAccountService";

describe("apiAccount E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiAccountList => {
        var firstModel = apiAccountList.first();

        if (apiAccountList.size() > 0) {
          expect(firstModel instanceof apiAccount).toBeTruthy();
          console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          console.log("E2E test for apiAccount is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
