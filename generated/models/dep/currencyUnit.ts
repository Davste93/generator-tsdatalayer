/* import {Model, indexKey, List} from  "tsmvc"; */

import {currencyContext} from "./currencyContext";

export class currencyUnit /* extends Model */ {
    context : currencyContext;
    defaultFractionDigits : number;
    currencyCode : string;
    numericCode : number;
}
