import {Model, indexKey, List} from  "tsmvc";

import currencyUnit from "./currencyUnit";

export class money extends Model {
    zero : boolean;
    number : number;
    factory : object;
    negative : boolean;
    negativeOrZero : boolean;
    context : object;
    currency : currencyUnit;
    numberStripped : number;
    positive : boolean;
    positiveOrZero : boolean;
}
