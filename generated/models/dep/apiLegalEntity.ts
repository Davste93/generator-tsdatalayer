import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";



@JsonObject
export class apiLegalEntity  extends Model {
    @JsonMember
    userRef : string;
    @JsonMember
    accounts : string;
}
