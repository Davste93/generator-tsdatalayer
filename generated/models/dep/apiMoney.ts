import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";



@JsonObject
export class apiMoney  extends Model {
    @JsonMember
    currency : string;
    @JsonMember
    value : number;
}
