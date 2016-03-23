import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccountEntry} from from "./apiAccountEntry"
import apiAccountEntryDataRepository from "./apiAccountEntryDataRepository";

//Linked Resources
import {apiAccount} from "./apiAccount";


export class apiAccountEntryDataRepositoryImpl extends ApiRepository<apiAccountEntry> implements apiAccountEntryDataRepository
{
  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountentries;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
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

  //Dynamically generated operations from linked resources (the exciting part)
    getAccount() : Promise<apiAccount> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accounts',
      'GET',
      null
      );
  }

  
}
