import {ApiRepository, List, Model, ApiRequestDecorator} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {<%= model.name %>} from "../models/<%= model.name %>";
import {<%= model.name %>DataRepository} from "./<%= model.name %>DataRepository";

//Linked Resources
<%- strImports %>


@injectable()
export class <%= model.name %>DataRepositoryImpl extends ApiRepository<<%= model.name %>> implements <%= model.name %>DataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator
    ) {
      super();
      this.requestDecorator = requestDecorator;
    }

  getModelType() : {new (): <%= model.name %>} {
    return <%= model.name %>;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return '<%= model.operations.crud.findAll %>;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.find %>'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<<%= model.name %>>> {
    return this.buildRequestAndParseAsModelList(
      '<%= model.operations.crud.findAll %>',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<<%= model.name %>>> {
      return this.buildRequestAndParseAsModelList(
        '<%= model.operations.crud.findAll %>/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : <%= model.name %>) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.create %>',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.delete %>'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : <%= model.name %>, modelId : string) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.update %>'.replace('{id}', modelId),
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
  <% Object.keys(model.operations.custom).forEach(function(k){  ops = model.operations.custom[k]; -%>
  <%= k %>(modelItem : <%= model.name %>) : Promise<<%- ops.isList? `List<${ops.model}>` : ops.model %>> {
    return this.buildRequestAndParseAsT<%- ops.isList? `List` : "" %><<%-ops.model%>>(
      modelItem.<%= ops.accessorProperty || ops.url %>,
      'GET',
      null
      );
  }
  <% }) -%>

}
