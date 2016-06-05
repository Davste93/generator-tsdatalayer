import {Model, indexKey, List} from  "tsmvc";

import {apiMoney} from "./dep/apiMoney";

export class apiAccount  extends Model {
    private _balance : apiMoney;
    get balance():apiMoney {
        return this._balance;
    }
    set balance(value : apiMoney) {
        this._balance = value;
    }
    
    private _currency : string;
    get currency():string {
        return this._currency;
    }
    set currency(value : string) {
        this._currency = value;
    }
    
    private _accountNumber : string;
    get accountNumber():string {
        return this._accountNumber;
    }
    set accountNumber(value : string) {
        this._accountNumber = value;
    }
    
    private _createdOn : string;
    get createdOn():string {
        return this._createdOn;
    }
    set createdOn(value : string) {
        this._createdOn = value;
    }
    
    private _friendlyName : string;
    get friendlyName():string {
        return this._friendlyName;
    }
    set friendlyName(value : string) {
        this._friendlyName = value;
    }
    
    private _accountEntries : string;
    get accountEntries():string {
        return this._accountEntries;
    }
    set accountEntries(value : string) {
        this._accountEntries = value;
    }
    
    private _accountPermissions : string;
    get accountPermissions():string {
        return this._accountPermissions;
    }
    set accountPermissions(value : string) {
        this._accountPermissions = value;
    }
    
}
