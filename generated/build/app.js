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
require("reflect-metadata");
//
// function logType(target : any, key : string) {
//   var t = Reflect.getMetadata("design:type", target, key);
//   console.log(`${key} type: ${t.name}`);
// }
//
// class Demo{
//   @logType // apply property decorator
//   public attr1 : string;
// }
const typedjson_1 = require("typedjson");
let Person = class Person {
    getFullname() {
        return this.firstName + " " + this.lastName;
    }
};
__decorate([
    typedjson_1.JsonMember, 
    __metadata('design:type', String)
], Person.prototype, "firstName", void 0);
__decorate([
    typedjson_1.JsonMember, 
    __metadata('design:type', String)
], Person.prototype, "lastName", void 0);
Person = __decorate([
    typedjson_1.JsonObject, 
    __metadata('design:paramtypes', [])
], Person);
function test(log) {
    var person = typedjson_1.TypedJSON.parse('{ "firstName": "John", "lastName": "Doe" }', Person);
    person instanceof Person; // true
    person.getFullname(); // "John Doe"
    return person.getFullname() === "John Doe" && person instanceof Person;
}
exports.test = test;
