import {Model, indexKey, List} from  "tsmvc";

import apiAccountPermission from "./apiAccountPermission";
import apiAccountEntry from "./apiAccountEntry";
import apiAccount from "./apiAccount";
import apiFee from "./apiFee";
import apiAccountRule from "./apiAccountRule";

export class apiAccountEntry extends Model {
    amount : apiMoney;
    description : string;
    runningBalance : number;
    account : string;
    timestamp : Date;
}
