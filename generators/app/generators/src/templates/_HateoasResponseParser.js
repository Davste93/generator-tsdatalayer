"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
var typedjson_1 = require("typedjson");
var HateoasResponseParser = (function () {
    function HateoasResponseParser() {
    }
    HateoasResponseParser.prototype.Parse = function (objType, json) {
        var newObj = new objType();
        var relationships = objType["relationships"] || {};
        json = JSON.stringify(json); //parser is expecting a string
        return typedjson_1.TypedJSON.parse(json, objType);
        ;
    };
    HateoasResponseParser.prototype.ParseList = function (objType, jsonString) {
        var _this = this;
        var json = this.GetObj(jsonString);
        var items = new tsmvc_1.List();
        var embedded = json._embedded;
        var data = embedded[Object.keys(embedded)[0]];
        data.forEach(function (modelListItem) {
            var model = _this.Parse(objType, modelListItem);
            items.add(model);
        });
        return items;
    };
    HateoasResponseParser.prototype.GetObj = function (json) {
        if (typeof json === "string") {
            return JSON.parse(json);
        }
        else {
            return json;
        }
    };
    HateoasResponseParser = __decorate([
        inversify_1.injectable()
    ], HateoasResponseParser);
    return HateoasResponseParser;
}());
exports.HateoasResponseParser = HateoasResponseParser;
