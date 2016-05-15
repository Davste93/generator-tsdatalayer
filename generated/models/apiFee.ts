import {Model, indexKey, List} from  "tsmvc";

import {apiMoney} from "./dep/apiMoney";

export class apiFee  extends Model {
    fixed : apiMoney;
}
