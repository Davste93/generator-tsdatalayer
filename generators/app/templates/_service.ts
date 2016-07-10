import {List, Service} from "tsmvc";
import {injectable, inject} from "inversify";


// Current Import
import {<%= model.name %>} from "../models/<%= model.name %>";
import {<%= model.name %>DataRepository} from "../data/<%= model.name %>DataRepository";

// Linked Resources
<%- strImports %>


@injectable()
export class <%= model.name %>Service implements Service {

  constructor(
    @inject('<%= model.name %>DataRepository') private _<%= model.name %>DataLayer: <%= model.name %>DataRepository,
    <%- svcDeps.map(d => {return "@inject('" + d + "DataRepository')" +
      "private _" + d + "DataLayer: " + d + 'DataRepository'}).join(',\n\t') %>)
    {}

  find(modelID: string): Promise<<%= model.name %>> {
    return this._<%= model.name %>DataLayer.find(modelID);
  }

  findAll(): Promise<List<<%= model.name %>>> {
    return this._<%= model.name %>DataLayer.findAll();
  }

  findAllWith(query: string): Promise<List<<%= model.name %>>> {
    return this._<%= model.name %>DataLayer.findAllWith(query);
  }

  addItem(modelItem: <%= model.name %>): Promise<<%= model.name %>> {
    return this._<%= model.name %>DataLayer.addItem(modelItem);
  }

  removeItem(modelID: string): Promise<<%= model.name %>> {
    return this._<%= model.name %>DataLayer.removeItem(modelID);
  }


  saveItem(modelItem: <%= model.name %>, modelId: string): Promise<<%= model.name %>> {
    return this._<%= model.name %>DataLayer.saveItem(modelItem, modelId);
  }

}
