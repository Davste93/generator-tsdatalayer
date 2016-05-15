import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";

//Current Import
import {apiAccount} from "../models/apiAccount";

//Linked Resources
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountPermission} from "../models/apiAccountPermission";

export interface apiAccountDataRepository extends DataRepository<apiAccount> {
  //Dynamically generated operations from linked resources
    getAccountEntries(modelItem : apiAccount) : Promise<List<apiAccountEntry>>;
    getAccountPermissions(modelItem : apiAccount) : Promise<List<apiAccountPermission>>;
  }
