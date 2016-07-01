"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
 % -strImports %  >
;
var default_1 = (function () {
    function default_1() {
    }
    default_1 = __decorate([
        typedjson_1.JsonObject
    ], default_1);
    return default_1;
}());
exports. = default_1;
 %  > ;
tsmvc_1.Model;
{
     % model.properties.forEach(function (property) {
        - %  >
        ;
        ;
        property.name -  %  > ;
         % -property.type -  %  > ;
         % ;
    }) -  %  >
    ;
}
