import {List, Service} from "tsmvc";

import {injectable, inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiFee} from "../models/apiFee";
import {apiFeeDataRepository} from "../data/apiFeeDataRepository";


@injectable()
export class apiFeeService implements Service {

public apiFeeDataLayer : apiFeeDataRepository;

constructor(
  @inject('apiFeeDataRepository') apiFeeDataLayer : apiFeeDataRepository)
  {
		this.apiFeeDataLayer = apiFeeDataLayer;
  }

find(modelID : string) : Promise<apiFee> {
  return this.apiFeeDataLayer.find(modelID);
}

findAll() : Promise<List<apiFee>> {
  return this.apiFeeDataLayer.findAll();
}

findAllWith(query : string) : Promise<List<apiFee>> {
  return this.apiFeeDataLayer.findAllWith(query);
}

addItem(modelItem : apiFee) : Promise<apiFee> {
  return this.apiFeeDataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<apiFee> {
  return this.apiFeeDataLayer.removeItem(modelID);
}


saveItem(modelItem : apiFee, modelId : string) : Promise<apiFee> {
  return this.apiFeeDataLayer.saveItem(modelItem, modelId);
}


}
