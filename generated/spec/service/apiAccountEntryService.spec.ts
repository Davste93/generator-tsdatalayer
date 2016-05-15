import {ServiceManager} from "../../services/ServiceManager";
import {apiAccountEntryService} from "../../services/apiAccountEntryService";

describe("ApiAccountEntryService", () =>{

  let service : apiAccountEntryService;
  beforeEach(() => {
      ServiceManager.initialize();
      //spyOn(ServiceManager.apiAccountEntryService);
  })


  it("should be resolved", () =>{

    expect(ServiceManager.apiAccountEntryService).toBeDefined();
  });

  describe("find", () => {

  });
});
