import {ApiRequestDecorator} from "tsmvc";
import * as base64 from "urlsafe-base64";

 export class BasicAuthDecorator implements ApiRequestDecorator {
    username : string;
    password : string;

    private _base64EncodedAuthHeader = "";
    constructor(username : string, password : string) {
      this.username = username;
      this.password = password;
      this._base64EncodedAuthHeader = base64.encode(Buffer.from(this.username + ":" + this.password));
    }

    decorateRequest(request : any) : any {
      return request.headers = _.extend(request.headers || {}, {
        'Authorization' : 'Basic ' + this._base64EncodedAuthHeader
      })
    };
  }
