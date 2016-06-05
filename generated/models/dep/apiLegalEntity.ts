import {Model, indexKey, List} from  "tsmvc";


export class apiLegalEntity  extends Model {
    private _userRef : string;
    get userRef():string {
        return this._userRef;
    }
    set userRef(value : string) {
        this._userRef = value;
    }
    
    private _accounts : string;
    get accounts():string {
        return this._accounts;
    }
    set accounts(value : string) {
        this._accounts = value;
    }
    
}
