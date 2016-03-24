import {ApiRepository, List, Model} from  "tsmvc";
import {Promise} from "es6-promise";

//Current Import
import {apiFee} from "../models/apiFee";
/*import apiFeeDataRepository from "./apiFeeDataRepository";*/

//Linked Resources


export class apiFeeDataRepositoryImpl extends ApiRepository<apiFee> /*implements apiFeeDataRepository*/
{

  getModelType() : {new (): apiFee} {
    return apiFee;
  }

  //TODO: This method probably must be removed/optional.
  getUrl() : string{
    return 'http://api.fundsrouter.com/profile/fees;'
  }

  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiFee>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/fees',
      'GET',
      null
    );
  }

  addItem(modelItem : apiFee) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiFee) : Promise<apiFee> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/',
      'PUT',
      modelItem
    );
  }

  //Dynamically generated operations from linked resources (the exciting part)
  
}
