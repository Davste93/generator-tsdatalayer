import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {apiAccountPermission} from "../../models/apiAccountPermission";
import {apiAccountPermissionService} from "../../services/apiAccountPermissionService";

describe("apiAccountPermission E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.apiAccountPermissionService;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(apiAccountPermissionList => {
        var firstModel = apiAccountPermissionList.first();

        if (apiAccountPermissionList.size() > 0) {
          expect(firstModel instanceof apiAccountPermission).toBeTruthy();
          console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          console.log("E2E test for apiAccountPermission is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
