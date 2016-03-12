import {Model, indexKey, List} from  "tsmvc";

import User from "./User";
import Address from "./Address";

export class User extends Model {
    name : string;
    surname : string;
    addresses : List<Address>;
}
