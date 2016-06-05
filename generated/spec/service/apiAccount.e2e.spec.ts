import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccount} from "../../models/apiAccount";
import {apiMoney} from "../../models/dep/apiMoney";
import {apiAccountService} from "../../services/apiAccountService";

describe("ApiAccount E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiAccountList => {
        var firstAccount = apiAccountList.first();
        debugger;
        if (apiAccountList.size() > 0) {
          expect(firstAccount instanceof apiAccount).toBeTruthy();
          expect(firstAccount.balance instanceof apiMoney).toBeTruthy();  
        }

        done();
      }).catch(c =>  {
        console.log(c);
        done();
      });
    });
  });

});
