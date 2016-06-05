import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";

//Current Import
import {apiAccountPermission} from "../models/apiAccountPermission";

//Linked Resources
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccount} from "../models/apiAccount";


export interface apiAccountPermissionDataRepository extends DataRepository<apiAccountPermission> {

}
