import {Model, indexKey, List} from  "tsmvc";

import {apiMoney} from "./dep/apiMoney";
import {currencyUnit} from "./dep/currencyUnit";

export class apiAccount  extends Model {
    balance : apiMoney;
    currency : currencyUnit;
    accountNumber : string;
    createdOn : Date;
    friendlyName : string;
    accountEntries : string;
    accountPermissions : string;
}
