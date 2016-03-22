"use strict";
var request = require('request');
var es6_promise_1 = require('es6-promise');
var _ = require('underscore');
var Requester = (function () {
    function Requester(baseUrl, username, password) {
        this.baseUrl = baseUrl;
        this.setAuthHeader(username, password);
    }
    Requester.prototype.setAuthHeader = function (username, password) {
        this._authHeader = "Basic " + new Buffer(username + ":" + password).toString("base64");
    };
    Requester.prototype.getAuthorization = function () {
        return this._authHeader;
    };
    Requester.prototype.makeRequest = function (partialUrl, requestOpts) {
        var headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            Authorization: this.getAuthorization()
        };
        if (_.isUndefined(requestOpts.header)) {
            requestOpts.headers = headers;
        }
        else {
            _.extend(requestOpts.headers, headers);
        }
        _.extend(requestOpts, { url: this.baseUrl + '/' + partialUrl });
        console.log(requestOpts);
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
var r = new Requester('', '35679111111', '123456');
r.makeRequest('accounts', { method: 'GET' }).then(function (response) {
    console.log(response.body);
});
