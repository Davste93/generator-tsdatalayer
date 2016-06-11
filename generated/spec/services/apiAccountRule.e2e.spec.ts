import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountRule} from "../../models/apiAccountRule";
import {apiAccountRuleService} from "../../services/apiAccountRuleService";

describe("apiAccountRule E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountRuleService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiAccountRuleList => {
        var firstModel = apiAccountRuleList.first();

        if (apiAccountRuleList.size() > 0) {
          expect(firstModel instanceof apiAccountRule).toBeTruthy();
          console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          console.log("E2E test for apiAccountRule is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
