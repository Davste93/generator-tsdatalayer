"use strict";
var base64 = require("urlsafe-base64");
var BasicAuthDecorator = (function () {
    function BasicAuthDecorator(username, password) {
        this._base64EncodedAuthHeader = "";
        this.username = username;
        this.password = password;
        this._base64EncodedAuthHeader = base64.encode(Buffer.from(this.username + ":" + this.password));
    }
    BasicAuthDecorator.prototype.decorateRequest = function (request) {
        return request.headers = _.extend(request.headers || {}, {
            'Authorization': 'Basic ' + this._base64EncodedAuthHeader
        });
    };
    ;
    return BasicAuthDecorator;
}());
exports.BasicAuthDecorator = BasicAuthDecorator;
