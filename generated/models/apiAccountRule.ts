import {Model, indexKey, List} from  "tsmvc";


export class apiAccountRule  extends Model {
    private _allowedToTxOut : boolean;
    get allowedToTxOut():boolean {
        return this._allowedToTxOut;
    }
    set allowedToTxOut(value : boolean) {
        this._allowedToTxOut = value;
    }
    
    private _description : string;
    get description():string {
        return this._description;
    }
    set description(value : string) {
        this._description = value;
    }
    
    private _accountPermissions : string;
    get accountPermissions():string {
        return this._accountPermissions;
    }
    set accountPermissions(value : string) {
        this._accountPermissions = value;
    }
    
}
