import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {<%= model.name %>} from from "./<%= model.name %>"
import <%= model.name %>DataRepository from "./<%= model.name %>DataRepository";

//Linked Resources
<%- strImports %>

export class <%= model.name %>DataRepositoryImpl extends ApiRepository<<%= model.name %>> implements <%= model.name %>DataRepository
{
  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return '<%= model.operations.crud.readAll %>;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
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

  //Dynamically generated operations from linked resources (the exciting part)
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
