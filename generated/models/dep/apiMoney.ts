import {Model, indexKey, List} from  "tsmvc";


export class apiMoney  extends Model {
    private _currency : string;
    get currency():string {
        return this._currency;
    }
    set currency(value : string) {
        this._currency = value;
    }
    
    private _value : number;
    get value():number {
        return this._value;
    }
    set value(value : number) {
        this._value = value;
    }
    
}
