import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiAccountRule} from from "./apiAccountRule"
import apiAccountRuleDataRepository from "./apiAccountRuleDataRepository";

//Linked Resources
import {apiAccountPermission} from "./apiAccountPermission";


export class apiAccountRuleDataRepositoryImpl extends ApiRepository<apiAccountRule> implements apiAccountRuleDataRepository
{
  getUrl() : string{
    return http://api.fundsrouter.com/profile/accountrules;
  }

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

    getAccountPermissions() : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/accountpermissions',
      'GET',
      null
      );
  }
  
}
