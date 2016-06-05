"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const tsmvc_1 = require("tsmvc");
const inversify_1 = require("inversify");
const typedjson_1 = require("typedjson");
let HateoasResponseParser = class HateoasResponseParser {
    Parse(objType, json) {
        const newObj = new objType();
        const relationships = objType["relationships"] || {};
        json = JSON.stringify(json);
        return typedjson_1.TypedJSON.parse(json, objType);
        ;
    }
    ParseList(objType, jsonString) {
        var json = this.GetObj(jsonString);
        var items = new tsmvc_1.List();
        var embedded = json._embedded;
        var data = embedded[Object.keys(embedded)[0]];
        data.forEach(modelListItem => {
            var model = this.Parse(objType, modelListItem);
            items.add(model);
        });
        return items;
    }
    GetObj(json) {
        if (typeof json === "string") {
            return JSON.parse(json);
        }
        else {
            return json;
        }
    }
};
HateoasResponseParser = __decorate([
    inversify_1.injectable(), 
    __metadata('design:paramtypes', [])
], HateoasResponseParser);
exports.HateoasResponseParser = HateoasResponseParser;
