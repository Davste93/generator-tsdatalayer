import {ApiRequestDecorator} from 'tsmvc';
import * as base64 from 'urlsafe-base64';
import * as _ from 'underscore';
import {inject, injectable, named} from 'inversify';

/* A basic authentication decorator which recieves the username and password via dependency injection.
If it sounds like a bad idea, it's because it is - there are better ways to solve this problem, however
the scope of this library is to get you up and running quickly. */
@injectable()
 export class BasicAuthDecorator implements ApiRequestDecorator {
    username: string;
    password: string;

    private _base64EncodedAuthHeader = '';
    constructor(
      @inject('string') @named('username') username: string,
      @inject('string') @named('password') password: string) {
      this.username = username;
      this.password = password;
      this._base64EncodedAuthHeader = base64.encode(Buffer.from(this.username + ':' + this.password));
    }

    decorateRequest(request: any): any {
      request.headers = _.extend(request.headers || {}, {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this._base64EncodedAuthHeader
      })

      return request;
    };
  }
