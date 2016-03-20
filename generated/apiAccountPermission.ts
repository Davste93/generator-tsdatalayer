import {Model, indexKey, List} from  "tsmvc";

import apiAccountPermission from "./apiAccountPermission";
import apiAccountEntry from "./apiAccountEntry";
import apiAccount from "./apiAccount";
import apiFee from "./apiFee";
import apiAccountRule from "./apiAccountRule";

export class apiAccountPermission extends Model {
    allow : apiLegalEntity;
    accountRule : string;
    onBehalfOf : apiLegalEntity;
    account : string;
}
