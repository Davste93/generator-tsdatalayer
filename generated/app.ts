import request = require('request');
import {Promise} from 'es6-promise';
import * as _ from 'underscore';



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

  makeRequest(partialUrl : string, requestOpts : any) : Promise<any> {
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

    console.log(requestOpts);

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
var r : Requester = new Requester('https://api.fundsrouter.com/', '35679111111', '123456');
r.makeRequest('accounts', {method : 'GET'}).then(response => {
  console.log(response.body);
});
