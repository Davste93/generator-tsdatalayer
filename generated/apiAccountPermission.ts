import {Model, indexKey, List} from  "tsmvc";

import apiAccountEntry from "./apiAccountEntry";
import apiAccountPermission from "./apiAccountPermission";
import apiFee from "./apiFee";
import apiAccount from "./apiAccount";
import apiAccountRule from "./apiAccountRule";

export class  extends Model {
    allow : apiLegalEntity;
    accountRule : string;
    onBehalfOf : apiLegalEntity;
    account : string;
}
