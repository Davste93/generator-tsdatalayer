import {List, Service} from "tsmvc";

import {inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiAccountPermission} from "../models/apiAccountPermission";
import {apiAccountPermissionDataRepository} from "../data/apiAccountPermissionDataRepository";
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccountRuleDataRepository} from "../data/apiAccountRuleDataRepository";


@inject('apiAccountPermission', 'apiAccountRule')
export class apiAccountRuleService implements Service {

constructor(
	public apiAccountPermissionDataLayer : apiAccountPermissionDataRepository,
	public apiAccountRuleDataLayer : apiAccountRuleDataRepository){}


find(modelID : string) : Promise<apiAccountRule> {
  return this.apiAccountRuleDataLayer.find(modelID);
}

findAll() : Promise<List<apiAccountRule>> {
  return this.apiAccountRuleDataLayer.findAll();
}

findAllWith(query : string) : Promise<List<apiAccountRule>> {
  return this.apiAccountRuleDataLayer.findAllWith(query);
}

addItem(modelItem : apiAccountRule) : Promise<apiAccountRule> {
  return this.apiAccountRuleDataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<apiAccountRule> {
  return this.apiAccountRuleDataLayer.removeItem(modelID);
}


saveItem(modelItem : apiAccountRule, modelId : string) : Promise<apiAccountRule> {
  return this.apiAccountRuleDataLayer.saveItem(modelItem, modelId);
}


  getAccountPermissions(modelItem : apiAccountRule) : Promise<List<apiAccountPermission>> {
    return this.apiAccountRuleDataLayer.getAccountPermissions(modelItem);
  }
}
