import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";

//Current Import
import {apiAccountEntry} from "../models/apiAccountEntry";

//Linked Resources
import {apiAccount} from "../models/apiAccount";


export interface apiAccountEntryDataRepository extends DataRepository<apiAccountEntry> {

}
