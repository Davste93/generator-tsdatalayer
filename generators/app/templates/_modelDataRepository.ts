import {Promise} from "es6-promise";
import {DataRepository, List} from "tsmvc";
import {injectable} from "inversify";

//Current Import
import {<%= model.name %>} from "../models/<%= model.name %>";

//Linked Resources
<%- strImports %>

@injectable()
export interface <%= model.name %>DataRepository extends DataRepository<<%= model.name %>> {
  //Dynamically generated operations from linked resources
  <% Object.keys(model.operations.custom).forEach(function(k){  ops = model.operations.custom[k]; -%>
  <%= k %>(modelItem : <%= model.name %>) : Promise<<%- ops.isList? `List<${ops.model}>` : ops.model %>>;
  <% }) -%>
}
