import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";

import {apiMoney} from "./dep/apiMoney";


@JsonObject
export class apiAccountEntry  extends Model {
    @JsonMember
    amount : apiMoney;
    @JsonMember
    description : string;
    @JsonMember
    runningBalance : number;
    @JsonMember
    account : string;
    @JsonMember
    timestamp : string;
}
