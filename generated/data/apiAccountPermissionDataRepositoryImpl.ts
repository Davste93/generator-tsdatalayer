import {ApiRepository, List, Model} from  "tsmvc";
import {Promise} from "es6-promise";

//Current Import
import {apiAccountPermission} from "../models/apiAccountPermission";
/*import apiAccountPermissionDataRepository from "./apiAccountPermissionDataRepository";*/

//Linked Resources
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccount} from "../models/apiAccount";


export class apiAccountPermissionDataRepositoryImpl extends ApiRepository<apiAccountPermission> /*implements apiAccountPermissionDataRepository*/
{

  getModelType() : {new (): apiAccountPermission} {
    return apiAccountPermission;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountpermissions;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountpermissions',
      'GET',
      null
    );
  }

  //Finds all entities 
  findAllWith(query : string) : Promise<List<apiAccountPermission>> {
      return this.buildRequestAndParseAsModelList(
        'http://api.fundsrouter.com/profile/accountpermissions/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccountPermission) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountPermission) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountpermissions/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccountRule(modelItem : apiAccountPermission) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsT<apiAccountRule>(
      modelItem.accountRule,
      'GET',
      null
      );
  }

    getAccount(modelItem : apiAccountPermission) : Promise<apiAccount> {
    return this.buildRequestAndParseAsT<apiAccount>(
      modelItem.account,
      'GET',
      null
      );
  }

  
}
