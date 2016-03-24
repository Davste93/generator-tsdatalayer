import {ApiRepository, List, Model} from  "tsmvc";
import {Promise} from "es6-promise";

//Current Import
import {apiAccountEntry} from "../models/apiAccountEntry";
/*import apiAccountEntryDataRepository from "./apiAccountEntryDataRepository";*/

//Linked Resources
import {apiAccount} from "../models/apiAccount";


export class apiAccountEntryDataRepositoryImpl extends ApiRepository<apiAccountEntry> /*implements apiAccountEntryDataRepository*/
{

  getModelType() : {new (): apiAccountEntry} {
    return apiAccountEntry;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountentries;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountEntry>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountentries',
      'GET',
      null
    );
  }

  addItem(modelItem : apiAccountEntry) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountEntry) : Promise<apiAccountEntry> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/',
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
