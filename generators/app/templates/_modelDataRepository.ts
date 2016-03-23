import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {<%= model.name %>} from from "./<%= model.name %>"
import <%= model.name %>DataRepository from "./<%= model.name %>DataRepository";

//Linked Resources
<%- strImports %>

export class <%= model.name %>DataRepositoryImpl extends ApiRepository<<%= model.name %>> implements <%= model.name %>DataRepository
{
  getUrl() : string{
    return <%= model.operations.crud.readAll %>;
  }

  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.read %>'.replace('{id}', modelID),
      'GET',
      null
    );
  }


  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      '<%= model.operations.crud.readAll %>',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.create %>',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.delete %>'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.update %>',
      'PUT',
      modelItem
    );
  }

  <% Object.keys(model.operations.custom).forEach(function(k){  ops = model.operations.custom[k]; -%>
  <%= k %>() : Promise<<%- ops.isList? `List<${ops.model}>` : ops.model %>> {
    return this.buildRequestAndParseAsModelList(
      '<%= ops.url %>',
      'GET',
      null
      );
  }
  <% }) -%>

}
