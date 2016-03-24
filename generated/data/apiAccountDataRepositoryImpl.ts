import {ApiRepository, List, Model} from  "tsmvc";
import {Promise} from "es6-promise";

//Current Import
import {apiAccount} from "../models/apiAccount";
/*import apiAccountDataRepository from "./apiAccountDataRepository";*/

//Linked Resources
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountPermission} from "../models/apiAccountPermission";


export class apiAccountDataRepositoryImpl extends ApiRepository<apiAccount> /*implements apiAccountDataRepository*/
{

  getModelType() : {new (): apiAccount} {
    return apiAccount;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accounts;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccount>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accounts',
      'GET',
      null
    );
  }

  //Finds all entities 
  findAllWith(query : string) : Promise<List<apiAccount>> {
      return this.buildRequestAndParseAsModelList(
        'http://api.fundsrouter.com/profile/accounts/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccount) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccount) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccountEntries(modelItem : apiAccount) : Promise<List<apiAccountEntry>> {
    return this.buildRequestAndParseAsTList<apiAccountEntry>(
      modelItem.accountEntries,
      'GET',
      null
      );
  }

    getAccountPermissions(modelItem : apiAccount) : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsTList<apiAccountPermission>(
      modelItem.accountPermissions,
      'GET',
      null
      );
  }

  
}
