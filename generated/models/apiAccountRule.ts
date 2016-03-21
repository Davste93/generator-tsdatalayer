import {Model, indexKey, List} from  "tsmvc";


export class apiAccountRule extends Model {
    allowedToTxOut : boolean;
    description : string;
    accountPermissions : string;
}
