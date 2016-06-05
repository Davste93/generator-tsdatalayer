import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";

import {apiMoney} from "./dep/apiMoney";


@JsonObject
export class apiAccount  extends Model {
    @JsonMember
    balance : apiMoney;
    @JsonMember
    currency : string;
    @JsonMember
    accountNumber : string;
    @JsonMember
    createdOn : string;
    @JsonMember
    friendlyName : string;
    @JsonMember
    accountEntries : string;
    @JsonMember
    accountPermissions : string;
}
