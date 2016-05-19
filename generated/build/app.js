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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require("inversify");
require("reflect-metadata");
var Dog = (function () {
    function Dog() {
    }
    return Dog;
}());
var Human = (function () {
    function Human() {
    }
    return Human;
}());
var HateosParser = (function () {
    function HateosParser() {
    }
    HateosParser.prototype.parse = function () {
        return "Hello HATEOAS!";
    };
    HateosParser = __decorate([
        inversify_1.injectable()
    ], HateosParser);
    return HateosParser;
}());
var ApiParser = (function () {
    function ApiParser() {
    }
    ApiParser.prototype.parse = function () {
        return "Hello JSON!";
    };
    ApiParser = __decorate([
        inversify_1.injectable()
    ], ApiParser);
    return ApiParser;
}());
var DataRepository = (function () {
    function DataRepository() {
    }
    return DataRepository;
}());
var DogDataRepository = (function (_super) {
    __extends(DogDataRepository, _super);
    function DogDataRepository(parser) {
        _super.call(this);
        this.parser = parser;
    }
    DogDataRepository = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Parser<Dog>'))
    ], DogDataRepository);
    return DogDataRepository;
}(DataRepository));
var HumanDataRepository = (function (_super) {
    __extends(HumanDataRepository, _super);
    function HumanDataRepository(parser) {
        _super.call(this);
        this.parser = parser;
    }
    HumanDataRepository = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Parser'))
    ], HumanDataRepository);
    return HumanDataRepository;
}(DataRepository));
var kernel = new inversify_1.Kernel();
//kernel.bind<Parser<any>>("Parser").to(ApiParser);
//kernel.bind<Parser<any>>("Parser").to(HateosParser);
// kernel.bind<Parser<Human>>("Parser<Human>").to(HateosParser);
// kernel.bind<Parser<any>>("Parser").to(HateosParser).whenTargetNamed("DogDataRepository");
// kernel.bind<Parser<Human>>("Parser").to(ApiParser).whenTargetNamed("HumanDataRepository");
kernel.bind("DogDataRepository").to(DogDataRepository);
console.log('got here1');
kernel.bind("Parser<Dog>").to(HateosParser).when(function (request) {
    debugger;
    console.log('got here 2');
    return true;
});
kernel.bind("Parser<Dog>").to(ApiParser).when(function (request) {
    debugger;
    console.log('got here 3');
    return false;
});
var dogDataRepository = kernel.get("DogDataRepository");
console.log(dogDataRepository.parser.parse());
