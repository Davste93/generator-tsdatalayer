import {ApiRepository, List, Model, ApiRequestDecorator} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {apiFee} from "../models/apiFee";
import {apiFeeDataRepository} from "./apiFeeDataRepository";

//Linked Resources



@injectable()
export class apiFeeDataRepositoryImpl extends ApiRepository<apiFee> implements apiFeeDataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator
    ) {
      super();
      this.requestDecorator = requestDecorator;
    }

  getModelType() : {new (): apiFee} {
    return apiFee;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'https://api.fundsrouter.com/fees;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiFee>> {
    return this.buildRequestAndParseAsModelList(
      'https://api.fundsrouter.com/fees',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<apiFee>> {
      return this.buildRequestAndParseAsModelList(
        'https://api.fundsrouter.com/fees/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiFee) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/fees',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiFee, modelId : string) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/fees/{id}/'.replace('{id}', modelId),
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
  
}
