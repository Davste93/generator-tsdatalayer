import {List, Service} from "tsmvc";

import {injectable, inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiAccountPermission} from "../models/apiAccountPermission";
import {apiAccountPermissionDataRepository} from "../data/apiAccountPermissionDataRepository";
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccountRuleDataRepository} from "../data/apiAccountRuleDataRepository";


@injectable()
export class apiAccountRuleService implements Service {

public apiAccountPermissionDataLayer : apiAccountPermissionDataRepository;
public apiAccountRuleDataLayer : apiAccountRuleDataRepository;

constructor(
  @inject('apiAccountPermissionDataRepository') apiAccountPermissionDataLayer : apiAccountPermissionDataRepository,
	@inject('apiAccountRuleDataRepository') apiAccountRuleDataLayer : apiAccountRuleDataRepository)
  {
		this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
		this.apiAccountRuleDataLayer = apiAccountRuleDataLayer;
  }

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
