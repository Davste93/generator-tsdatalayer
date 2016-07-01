"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
model.name %  > ;
from;
"../models/<%= model.name %>";
model.name %  > DataRepository;
from;
"./<%= model.name %>DataRepository";
//Linked Resources
 % -strImports %  >
;
var default_1 = (function () {
    function default_1() {
    }
    default_1 = __decorate([
        inversify_1.injectable()
    ], default_1);
    return default_1;
}());
exports. = default_1;
 %  > DataRepositoryImpl;
tsmvc_1.ApiRepository << ;
model.name %  >> implements < ;
model.name %  > DataRepository;
{
    constructor();
    requestDecorator: tsmvc_1.ApiRequestDecorator,
    ;
    requestParser: tsmvc_1.Parser << ;
    model.name %  >>
    ;
    {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    getModelType();
    {
        new ();
        ;
        model.name %  > ;
    }
    {
        return ;
        model.name %  > ;
    }
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    find(modelID, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operationsfind %>'.replace('{{id}}', modelID), 'GET', null)
    };
    findAll();
    Promise < tsmvc_1.List << ;
    model.name %  >>> {
        return: this.buildRequestAndParseAsModelList('<%= model.operationsfindAll %>', 'GET', null)
    };
    //Finds all entities
    findAllWith(query, string);
    Promise < tsmvc_1.List << ;
    model.name %  >>> {
        return: this.buildRequestAndParseAsModelList('<%= model.operationsfindAll %>/' + query, 'GET', null)
    };
    addItem(modelItem, , model.name %  > );
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operationscreate %>', 'POST', modelItem)
    };
    removeItem(modelID, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operationsdelete %>'.replace('{{id}}', modelID), 'DELETE', null)
    };
    saveItem(modelItem, , model.name %  > , modelId, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operationsupdate %>'.replace('{{id}}', modelId), 'PUT', modelItem)
    };
}
