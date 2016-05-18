"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var base64 = require("urlsafe-base64");
var _ = require("underscore");
var inversify_1 = require("inversify");
var BasicAuthDecorator = (function () {
    function BasicAuthDecorator(username, password) {
        this._base64EncodedAuthHeader = "";
        this.username = username;
        this.password = password;
        this._base64EncodedAuthHeader = base64.encode(Buffer.from(this.username + ":" + this.password));
    }
    BasicAuthDecorator.prototype.decorateRequest = function (request) {
        request.headers = _.extend(request.headers || {}, {
            'Authorization': 'Basic ' + this._base64EncodedAuthHeader
        });
        return request;
    };
    ;
    BasicAuthDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("string")),
        __param(0, inversify_1.named("username")),
        __param(1, inversify_1.inject("string")),
        __param(1, inversify_1.named("password"))
    ], BasicAuthDecorator);
    return BasicAuthDecorator;
}());
exports.BasicAuthDecorator = BasicAuthDecorator;
