import {List, Service} from "tsmvc";

import {injectable, inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
<% svcDeps.forEach(function(d){%>import {<%= d %>} from "../models/<%= d %>";
import {<%= d %>DataRepository} from "../data/<%= d %>DataRepository";
<% }) -%>


@injectable()
export class <%= model.name %>Service implements Service {

<%- svcDeps.map(d => {return "public " + d + "DataLayer : " + d + "DataRepository;"}).join('\n') %>

constructor(
  <%- svcDeps.map(d => {return "@inject('" + d + "DataRepository') " + d + "DataLayer : " + d + 'DataRepository'}).join(',\n\t') %>)
  {
<%= svcDeps.map(d => {return `\t\tthis.${d}DataLayer = ${d}DataLayer;`}).join('\n');%>
  }

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



}
