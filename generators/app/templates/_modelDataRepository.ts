import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";

//Current Import
import {<%= model.name %>} from "../models/<%= model.name %>";

//Linked Resources
<%- strImports %>

export interface <%= model.name %>DataRepository extends DataRepository<<%= model.name %>> {

}
