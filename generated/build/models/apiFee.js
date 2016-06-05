"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiFee = (function (_super) {
    __extends(apiFee, _super);
    function apiFee() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember
    ], apiFee.prototype, "fixed", void 0);
    apiFee = __decorate([
        typedjson_1.JsonObject
    ], apiFee);
    return apiFee;
}(tsmvc_1.Model));
exports.apiFee = apiFee;
