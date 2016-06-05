import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";

//Current Import
import {apiAccountRule} from "../models/apiAccountRule";

//Linked Resources
import {apiAccountPermission} from "../models/apiAccountPermission";


export interface apiAccountRuleDataRepository extends DataRepository<apiAccountRule> {

}
