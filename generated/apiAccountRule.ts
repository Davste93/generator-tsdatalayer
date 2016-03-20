import {Model, indexKey, List} from  "tsmvc";

import apiAccountEntry from "./apiAccountEntry";
import apiAccountPermission from "./apiAccountPermission";
import apiFee from "./apiFee";
import apiAccount from "./apiAccount";
import apiAccountRule from "./apiAccountRule";

export class  extends Model {
    allowedToTxOut : boolean;
    description : string;
    accountPermissions : string;
}
