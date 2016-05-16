import {List, Service} from "tsmvc";

import {injectable, inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountEntryDataRepository} from "../data/apiAccountEntryDataRepository";
import {apiAccountPermission} from "../models/apiAccountPermission";
import {apiAccountPermissionDataRepository} from "../data/apiAccountPermissionDataRepository";
import {apiAccount} from "../models/apiAccount";
import {apiAccountDataRepository} from "../data/apiAccountDataRepository";


@injectable()
export class apiAccountService implements Service {

public apiAccountEntryDataLayer : apiAccountEntryDataRepository;
public apiAccountPermissionDataLayer : apiAccountPermissionDataRepository;
public apiAccountDataLayer : apiAccountDataRepository;

constructor(
  @inject('apiAccountEntryDataRepository') apiAccountEntryDataLayer : apiAccountEntryDataRepository,
	@inject('apiAccountPermissionDataRepository') apiAccountPermissionDataLayer : apiAccountPermissionDataRepository,
	@inject('apiAccountDataRepository') apiAccountDataLayer : apiAccountDataRepository)
  {
		this.apiAccountEntryDataLayer = apiAccountEntryDataLayer;
		this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
		this.apiAccountDataLayer = apiAccountDataLayer;
  }

find(modelID : string) : Promise<apiAccount> {
  return this.apiAccountDataLayer.find(modelID);
}

findAll() : Promise<List<apiAccount>> {
  return this.apiAccountDataLayer.findAll();
}

findAllWith(query : string) : Promise<List<apiAccount>> {
  return this.apiAccountDataLayer.findAllWith(query);
}

addItem(modelItem : apiAccount) : Promise<apiAccount> {
  return this.apiAccountDataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<apiAccount> {
  return this.apiAccountDataLayer.removeItem(modelID);
}


saveItem(modelItem : apiAccount, modelId : string) : Promise<apiAccount> {
  return this.apiAccountDataLayer.saveItem(modelItem, modelId);
}


  getAccountEntries(modelItem : apiAccount) : Promise<List<apiAccountEntry>> {
    return this.apiAccountDataLayer.getAccountEntries(modelItem);
  }
  getAccountPermissions(modelItem : apiAccount) : Promise<List<apiAccountPermission>> {
    return this.apiAccountDataLayer.getAccountPermissions(modelItem);
  }
}
