import {List, Service} from "tsmvc";

import {inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
<% svcDeps.forEach(function(d){%>import {<%= d %>} from "../models/<%= d %>";
import {<%= d %>DataRepository} from "../data/<%= d %>DataRepository";
<% }) -%>


@inject(<%- svcDeps.map(d => {return "'" + d + "DataLayer'"}).join(', '); %>)
export class <%= model.name %>Service implements Service {

constructor(
<%= svcDeps.map(d => {return `\tpublic ${d}DataLayer : ${d}DataRepository`}).join(',\n');%>){}


find(modelID : string) : Promise<<%= model.name %>> {
  return this.<%= model.name %>DataLayer.find(modelID);
}

findAll() : Promise<List<<%= model.name %>>> {
  return this.<%= model.name %>DataLayer.findAll();
}

findAllWith(query : string) : Promise<List<<%= model.name %>>> {
  return this.<%= model.name %>DataLayer.findAllWith(query);
}

addItem(modelItem : <%= model.name %>) : Promise<<%= model.name %>> {
  return this.<%= model.name %>DataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<<%= model.name %>> {
  return this.<%= model.name %>DataLayer.removeItem(modelID);
}


saveItem(modelItem : <%= model.name %>, modelId : string) : Promise<<%= model.name %>> {
  return this.<%= model.name %>DataLayer.saveItem(modelItem, modelId);
}


<% Object.keys(model.operations.custom).forEach( k => {  ops = model.operations.custom[k]; -%>
  <%= k %>(modelItem : <%= model.name %>) : Promise<<%- ops.isList? `List<${ops.model}>` : ops.model %>> {
    return this.<%= model.name %>DataLayer.<%= k %>(modelItem);
  }
<% }) -%>
}
