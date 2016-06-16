import {ApiRepository, List, Model, ApiRequestDecorator, Parser} from  "tsmvc";
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
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator,
      @inject('Parser') requestParser : Parser<<%= model.name %>>
    ) {
      super();
      this.requestDecorator = requestDecorator;
      this.parser = requestParser;
    }

  getModelType() : {new (): <%= model.name %>} {
    return <%= model.name %>;
  }


  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{{id}} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.find %>'.replace('{{id}}', modelID),
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
      '<%= model.operations.crud.delete %>'.replace('{{id}}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : <%= model.name %>, modelId : string) : Promise<<%= model.name %>> {
    return this.buildRequestAndParseAsModel(
      '<%= model.operations.crud.update %>'.replace('{{id}}', modelId),
      'PUT',
      modelItem
    );
  }


}
