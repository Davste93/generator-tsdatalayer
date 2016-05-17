// //Typescript imports
// import {ApiRequestDecorator} from "tsmvc";
// import * as _ from "underscore";
//
// //JS without typings:
// let urlLib = require('url');
// let Config       = require('keycloak-auth-utils').Config;
// let GrantManager = require('keycloak-auth-utils').GrantManager;
// let Form         = require('keycloak-auth-utils').Form;
//
// export class KeycloakApiDecorator implements ApiRequestDecorator {
//
//  username : string;
//  password : string;
//  config : any;
//  grantManager : any;
//  grant : any;
//
//  constructor(username : string, password : string, grant : any = null, configPath = "keycloak.json") {
//    this.username = username;
//    this.password = password;
//    this.grant = grant;
//
//    if (configPath) {
//      this.configure(configPath);
//    }
//  }
//
//  configure(configPath : string) {
//    this.config = new Config(configPath);
//    this.grantManager = new GrantManager(this.config);
//  }
//
//  ensureGrant() : Promise<any> {
//    var self = this;
//
//    if (!this.grant) {
//      return this.obtainGrantDirectly().then(grant => {
//        self.grant = grant;
//      });
//    }
//   return this.ensureFreshness(this.grant);
//  }
//
//  obtainGrantDirectly() : Promise<any> {
//   var self = this;
//
//    return new Promise(resolve => {
//      self.grantManager.obtainDirectly( self.username, self.password, resolve);
//    });
//  }
//
//  ensureFreshness(grant) : Promise<any> {
//    var self = this;
//
//    return new Promise(resolve => {
//      return self.grantManager.ensureFreshness(grant, resolve );
//    });
//  }
//
//   decorateRequest(request : any) : any {
//     return request.headers = _.extend(request.headers || {}, {
//       'Authorization' : ' Bearer ' + this.grant.access_token
//     })
//     //request.headers = _.extend(request.headers || {})
//   };
// }
