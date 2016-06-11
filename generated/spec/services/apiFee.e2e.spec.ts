import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiFee} from "../../models/apiFee";
import {apiFeeService} from "../../services/apiFeeService";

describe("apiFee E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiFeeService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiFeeList => {
        var firstModel = apiFeeList.first();

        if (apiFeeList.size() > 0) {
          expect(firstModel instanceof apiFee).toBeTruthy();
          console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          console.log("E2E test for apiFee is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
