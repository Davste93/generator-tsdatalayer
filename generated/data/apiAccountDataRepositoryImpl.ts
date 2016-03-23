import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccount} from from "./apiAccount"
import apiAccountDataRepository from "./apiAccountDataRepository";

//Linked Resources
import {apiAccountEntry} from "./apiAccountEntry";
import {apiAccountPermission} from "./apiAccountPermission";


export class apiAccountDataRepositoryImpl extends ApiRepository<apiAccount> implements apiAccountDataRepository
{
  getUrl() : string{
    return http://api.fundsrouter.com/profile/accounts;
  }

  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }


  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accounts',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accounts/{id}/',
      'PUT',
      modelItem
    );
  }

    getAccountEntries() : Promise<List<apiAccountEntry>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountentries',
      'GET',
      null
      );
  }
    getAccountPermissions() : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountpermissions',
      'GET',
      null
      );
  }
  
}
