import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccountEntry} from from "./apiAccountEntry"
import apiAccountEntryDataRepository from "./apiAccountEntryDataRepository";

//Linked Resources
import {apiAccount} from "./apiAccount";


export class apiAccountEntryDataRepositoryImpl extends ApiRepository<apiAccountEntry> implements apiAccountEntryDataRepository
{
  getUrl() : string{
    return http://api.fundsrouter.com/profile/accountentries;
  }

  //CRUD Operations
  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountentries',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountentries/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamic Operations from linked resources
    getAccount() : Promise<apiAccount> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accounts',
      'GET',
      null
      );
  }

  
}
