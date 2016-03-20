import {Model, indexKey, List} from  "tsmvc";

import apiAccountPermission from "./apiAccountPermission";
import apiAccountEntry from "./apiAccountEntry";
import apiAccount from "./apiAccount";
import apiFee from "./apiFee";
import apiAccountRule from "./apiAccountRule";

export class apiAccount extends Model {
    balance : apiMoney;
    currency : currencyUnit;
    accountNumber : string;
    createdOn : Date;
    friendlyName : string;
    accountEntries : string;
    accountPermissions : string;
}
