import {ApiRepository, List, Model, ApiRequestDecorator} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountEntryDataRepository} from "./apiAccountEntryDataRepository";

//Linked Resources
import {apiAccount} from "../models/apiAccount";



@injectable()
export class apiAccountEntryDataRepositoryImpl extends ApiRepository<apiAccountEntry> implements apiAccountEntryDataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator
    ) {
      super();
      this.requestDecorator = requestDecorator;
    }

  getModelType() : {new (): apiAccountEntry} {
    return apiAccountEntry;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'https://api.fundsrouter.com/accountentries;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountEntry>> {
    return this.buildRequestAndParseAsModelList(
      'https://api.fundsrouter.com/accountentries',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<apiAccountEntry>> {
      return this.buildRequestAndParseAsModelList(
        'https://api.fundsrouter.com/accountentries/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccountEntry) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountentries',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountEntry, modelId : string) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountentries/{id}/'.replace('{id}', modelId),
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccount(modelItem : apiAccountEntry) : Promise<apiAccount> {
    return this.buildRequestAndParseAsT<apiAccount>(
      modelItem.account,
      'GET',
      null
      );
  }
  
}
