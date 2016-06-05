import {Model, indexKey, List} from  "tsmvc";

import {apiMoney} from "./dep/apiMoney";

export class apiAccountEntry  extends Model {
    private _amount : apiMoney;
    get amount():apiMoney {
        return this._amount;
    }
    set amount(value : apiMoney) {
        this._amount = value;
    }
    
    private _description : string;
    get description():string {
        return this._description;
    }
    set description(value : string) {
        this._description = value;
    }
    
    private _runningBalance : number;
    get runningBalance():number {
        return this._runningBalance;
    }
    set runningBalance(value : number) {
        this._runningBalance = value;
    }
    
    private _account : string;
    get account():string {
        return this._account;
    }
    set account(value : string) {
        this._account = value;
    }
    
    private _timestamp : string;
    get timestamp():string {
        return this._timestamp;
    }
    set timestamp(value : string) {
        this._timestamp = value;
    }
    
}
