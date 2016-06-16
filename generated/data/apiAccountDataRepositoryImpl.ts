import {ApiRepository, List, Model, ApiRequestDecorator, Parser} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {apiAccount} from "../models/apiAccount";
import {apiAccountDataRepository} from "./apiAccountDataRepository";

//Linked Resources
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountPermission} from "../models/apiAccountPermission";



@injectable()
export class apiAccountDataRepositoryImpl extends ApiRepository<apiAccount> implements apiAccountDataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator,
      @inject('Parser') requestParser : Parser<apiAccount>
    ) {
      super();
      this.requestDecorator = requestDecorator;
      this.parser = requestParser;
    }

  getModelType() : {new (): apiAccount} {
    return apiAccount;
  }


  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{{id}} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccount>> {
    return this.buildRequestAndParseAsModelList(
      'https://api.fundsrouter.com/accounts',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<apiAccount>> {
      return this.buildRequestAndParseAsModelList(
        'https://api.fundsrouter.com/accounts/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccount) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accounts',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccount, modelId : string) : Promise<apiAccount> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelId),
      'PUT',
      modelItem
    );
  }


}
