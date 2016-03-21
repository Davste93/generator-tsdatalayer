import {Model, indexKey, List} from  "tsmvc";

import apiLegalEntity from "./dep/apiLegalEntity";

export class apiAccountPermission extends Model {
    allow : apiLegalEntity;
    accountRule : string;
    onBehalfOf : apiLegalEntity;
    account : string;
}
