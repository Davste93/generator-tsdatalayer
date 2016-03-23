import {ApiRepository, List, Model} from  "tsmvc";

//Current Import
import {apiFee} from from "./apiFee"
import apiFeeDataRepository from "./apiFeeDataRepository";

//Linked Resources


export class apiFeeDataRepositoryImpl extends ApiRepository<apiFee> implements apiFeeDataRepository
{
  getUrl() : string{
    return http://api.fundsrouter.com/profile/fees;
  }

  getItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }


  getAllItems() : Promise<List<T>> {
    return this.buildRequestAndParseAsModelList(
      'http://api.fundsrouter.com/profile/fees',
      'GET',
      null
    );
  }

  addItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : T) : Promise<T> {
    return this.buildRequestAndParseAsModel(
      'http://api.fundsrouter.com/profile/fees/{id}/',
      'PUT',
      modelItem
    );
  }

  
}
