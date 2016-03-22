/* import {Model, indexKey, List} from  "tsmvc"; */

import {apiMoney} from "./dep/apiMoney";

export class apiAccountEntry /* extends Model */ {
    amount : apiMoney;
    description : string;
    runningBalance : number;
    account : string;
    timestamp : Date;
}
