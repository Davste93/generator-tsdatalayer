import {Model, indexKey, List} from  "tsmvc";

import {apiMoney} from "./dep/apiMoney";

export class apiFee  extends Model {
    private _fixed : apiMoney;
    get fixed():apiMoney {
        return this._fixed;
    }
    set fixed(value : apiMoney) {
        this._fixed = value;
    }
    
}
