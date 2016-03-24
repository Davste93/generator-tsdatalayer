import {ApiRepository, List, Model} from  "tsmvc";
import {Promise} from "es6-promise";

//Current Import
import {apiAccountRule} from "../models/apiAccountRule";
/*import apiAccountRuleDataRepository from "./apiAccountRuleDataRepository";*/

//Linked Resources
import {apiAccountPermission} from "../models/apiAccountPermission";


export class apiAccountRuleDataRepositoryImpl extends ApiRepository<apiAccountRule> /*implements apiAccountRuleDataRepository*/
{

  getModelType() : {new (): apiAccountRule} {
    return apiAccountRule;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountrules;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountRule>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountrules',
      'GET',
      null
    );
  }

  addItem(modelItem : apiAccountRule) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountRule) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccountPermissions(modelItem : apiAccountRule) : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsTList<apiAccountPermission>(
      modelItem.accountPermissions,
      'GET',
      null
      );
  }

  
}
