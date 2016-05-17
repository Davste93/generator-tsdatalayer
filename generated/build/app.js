"use strict";
var request = require('request');
var es6_promise_1 = require('es6-promise');
var _ = require('underscore');
var Requester = (function () {
    function Requester(baseUrl) {
        this.baseUrl = baseUrl;
    }
    Requester.prototype.makeRequest = function (partialUrl, requestOpts) {
        //Add auth header:
        _.extend(requestOpts, { url: this.baseUrl + '/' + partialUrl });
        return new es6_promise_1.Promise(function (resolve, reject) {
            request(requestOpts, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    return Requester;
}());
//curl -u 35679111111:123456 -H 'Accept: application/json'  -H 'Content-type: application/json' -X GET accounts
var KeycloakApiDecorator_1 = require("./Auth/KeycloakApiDecorator");
debugger;
var keycloakApiDecorator = new KeycloakApiDecorator_1.KeycloakApiDecorator('test', 'test');
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
