import {ApiRepository, List, Model, ApiRequestDecorator, Parser} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {apiAccountPermission} from "../models/apiAccountPermission";
import {apiAccountPermissionDataRepository} from "./apiAccountPermissionDataRepository";

//Linked Resources
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccount} from "../models/apiAccount";



@injectable()
export class apiAccountPermissionDataRepositoryImpl extends ApiRepository<apiAccountPermission> implements apiAccountPermissionDataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator,
      @inject('Parser') requestParser : Parser<apiAccountPermission>
    ) {
      super();
      this.requestDecorator = requestDecorator;
      this.parser = requestParser;
    }

  getModelType() : {new (): apiAccountPermission} {
    return apiAccountPermission;
  }


  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{id} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountPermission>> {
    return this.buildRequestAndParseAsModelList(
      'https://api.fundsrouter.com/accountpermissions',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<apiAccountPermission>> {
      return this.buildRequestAndParseAsModelList(
        'https://api.fundsrouter.com/accountpermissions/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccountPermission) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountpermissions',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountPermission, modelId : string) : Promise<apiAccountPermission> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountpermissions/{id}/'.replace('{id}', modelId),
      'PUT',
      modelItem
    );
  }


}
