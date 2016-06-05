import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";



@JsonObject
export class apiAccountRule  extends Model {
    @JsonMember
    allowedToTxOut : boolean;
    @JsonMember
    description : string;
    @JsonMember
    accountPermissions : string;
}
