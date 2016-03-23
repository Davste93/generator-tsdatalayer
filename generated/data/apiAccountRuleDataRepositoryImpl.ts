import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccountRule} from from "./apiAccountRule"
import apiAccountRuleDataRepository from "./apiAccountRuleDataRepository";

//Linked Resources
import {apiAccountPermission} from "./apiAccountPermission";


export class apiAccountRuleDataRepositoryImpl extends ApiRepository<apiAccountRule> implements apiAccountRuleDataRepository
{
  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/accountrules;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountrules',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/accountrules/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
    getAccountPermissions() : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountpermissions',
      'GET',
      null
      );
  }

  
}
