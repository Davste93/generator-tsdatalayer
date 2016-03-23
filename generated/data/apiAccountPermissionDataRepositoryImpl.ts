import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccountPermission} from from "./apiAccountPermission"
import apiAccountPermissionDataRepository from "./apiAccountPermissionDataRepository";

//Linked Resources
import {apiAccountRule} from "./apiAccountRule";
import {apiAccount} from "./apiAccount";


export class apiAccountPermissionDataRepositoryImpl extends ApiRepository<apiAccountPermission> implements apiAccountPermissionDataRepository
{
  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountpermissions;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountpermissions',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccountRule() : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountrules',
      'GET',
      null
      );
  }

    getAccount() : Promise<apiAccount> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accounts',
      'GET',
      null
      );
  }

  
}
