import {Model, indexKey, List} from  "tsmvc";

import User from "./User";
import Address from "./Address";

export class Address extends Model {
    street : string;
    country : string;
}
