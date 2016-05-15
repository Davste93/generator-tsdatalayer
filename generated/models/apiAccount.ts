import {Model, indexKey, List} from  "tsmvc";
import {apiMoney} from "./dep/apiMoney";


export class apiAccount  extends Model {
    balance : apiMoney;
    currency : string;
    accountNumber : string;
    createdOn : Date;
    friendlyName : string;
    accountEntries : string;
    accountPermissions : string;
}
