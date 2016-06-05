import {Model, indexKey, List} from  "tsmvc";

import {apiLegalEntity} from "./dep/apiLegalEntity";

export class apiAccountPermission  extends Model {
    private _allow : apiLegalEntity;
    get allow():apiLegalEntity {
        return this._allow;
    }
    set allow(value : apiLegalEntity) {
        this._allow = value;
    }
    
    private _accountRule : string;
    get accountRule():string {
        return this._accountRule;
    }
    set accountRule(value : string) {
        this._accountRule = value;
    }
    
    private _onBehalfOf : apiLegalEntity;
    get onBehalfOf():apiLegalEntity {
        return this._onBehalfOf;
    }
    set onBehalfOf(value : apiLegalEntity) {
        this._onBehalfOf = value;
    }
    
    private _account : string;
    get account():string {
        return this._account;
    }
    set account(value : string) {
        this._account = value;
    }
    
}
