import {Service} from "tsmvc";
import {ServiceManager} from "../../services/serviceManager";
import {<%=model.name%>} from "../../models/<%=model.name%>";
import {<%=model.name%>Service} from "../../services/<%=model.name%>Service";

describe("<%=model.name%> E2E", () =>{

  var mockID : string = "PDMgdHlwZXNjcmlwdA==";
  var service;

  beforeEach(() => {
      ServiceManager.initialize();
      service = ServiceManager.<%=model.name%>Service;
  })


  describe("findAll", () => {
    it("should keep type information", (done)=>{
      service.findAll().then(<%=model.name%>List => {
        var firstModel = <%=model.name%>List.first();

        if (<%=model.name%>List.size() > 0) {
          expect(firstModel instanceof <%=model.name%>).toBeTruthy();
          //console.log(firstModel);
          //todo: recursive type testing
          //expect(firstModel.balance instanceof apiMoney).toBeTruthy();
        } else {
          //console.log("E2E test for <%=model.name%> is of size 0. API returned no results.");
        }

        done();
      }).catch(c =>  {
        done();
      });
    });
  });

});
