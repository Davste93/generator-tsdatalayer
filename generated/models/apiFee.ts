import {Model, indexKey, List} from  "tsmvc";
import {JsonObject, JsonMember} from "typedjson";

import {apiMoney} from "./dep/apiMoney";


@JsonObject
export class apiFee  extends Model {
    @JsonMember
    fixed : apiMoney;
}
