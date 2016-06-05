import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";

import {apiLegalEntity} from "./dep/apiLegalEntity";


@JsonObject
export class apiAccountPermission  extends Model {
    @JsonMember
    allow : apiLegalEntity;
    @JsonMember
    accountRule : string;
    @JsonMember
    onBehalfOf : apiLegalEntity;
    @JsonMember
    account : string;
}
