import request = require('request');
import {Promise} from 'es6-promise';
import * as _ from 'underscore';
import {Model} from "tsmvc";
import {apiAccount} from "./models/apiAccount";

class Requester {
  private _authHeader : string;
  private baseUrl : string;

  constructor(baseUrl, username, password){
    this.baseUrl = baseUrl;
    this.setAuthHeader(username, password);
  }

  setAuthHeader(username, password) : void {
    this._authHeader = "Basic " + new Buffer(username + ":" + password).toString("base64")
  }

  getAuthorization() : Object {
    return this._authHeader;
  }


  makeRequest<T>(partialUrl : string, requestOpts : any) : Promise<T> {
    //Add auth header:
    var headers = {
      'Accept' : 'application/json',
      'Content-type' : 'application/json',
      Authorization : this.getAuthorization()
    };

    if (_.isUndefined(requestOpts.header)) {
      requestOpts.headers = headers;
    } else {
      _.extend(requestOpts.headers, headers);
    }
    _.extend(requestOpts, {url : this.baseUrl + '/' + partialUrl});


    return new Promise( (resolve, reject) => {
      request(requestOpts,
      function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

//curl -u 35679111111:123456 -H 'Accept: application/json'  -H 'Content-type: application/json' -X GET accounts
var r : Requester = new Requester('', '35679111111', '123456');
r.makeRequest<any>('accounts', {method : 'GET'}).then(response => {
  var jsonObj = JSON.parse(response.body);

  console.log(<apiAccount> jsonObj._embedded[Object.keys(jsonObj._embedded)[0]][0]);
});
