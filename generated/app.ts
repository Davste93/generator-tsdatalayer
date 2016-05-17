import request = require('request');
import {Promise} from 'es6-promise';
import * as _ from 'underscore';
import {Model} from "tsmvc";
import {apiAccount} from "./models/apiAccount";



class Requester {
  private _authHeader : string;
  private baseUrl : string;

  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  makeRequest<T>(partialUrl : string, requestOpts : any) : Promise<T> {
    //Add auth header:
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


import {KeycloakApiDecorator} from "./Auth/KeycloakApiDecorator";
debugger;
var keycloakApiDecorator = new KeycloakApiDecorator('test', 'test');
keycloakApiDecorator.ensureGrant();
//
// var r : Requester = new Requester('');
//
// var requestOpts = {method : 'GET'};
// keycloakApiDecorator.decorateRequest(requestOpts);
//
// r.makeRequest<any>('accounts', requestOpts).then(response => {
//   var jsonObj = JSON.parse(response.body);
//
//   console.log(<apiAccount> jsonObj._embedded[Object.keys(jsonObj._embedded)[0]][0]);
// });
