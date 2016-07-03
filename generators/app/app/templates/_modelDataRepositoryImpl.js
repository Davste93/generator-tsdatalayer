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
var tsmvc_1 = require('tsmvc');
var inversify_1 = require('inversify');
model.name %  > ;
from;
'../models/<%= model.name %>';
model.name %  > DataRepository;
from;
'./<%= model.name %>DataRepository';
 % -strImports %  >
;
var default_1 = (function () {
    function default_1() {
    }
    default_1 = __decorate([
        inversify_1.injectable(), 
        __metadata('design:paramtypes', [])
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
    requestDecorator: ApiRequestDecorator,
    ;
    requestParser: Parser << ;
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
    find(modelID, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operations.find %>'.replace('{{id}}', modelID), 'GET', null)
    };
    findAll();
    Promise < tsmvc_1.List << ;
    model.name %  >>> {
        return: this.buildRequestAndParseAsModelList('<%= model.operations.findAll %>', 'GET', null)
    };
    findAllWith(query, string);
    Promise < tsmvc_1.List << ;
    model.name %  >>> {
        return: this.buildRequestAndParseAsModelList('<%= model.operations.findAll %>/' + query, 'GET', null)
    };
    addItem(modelItem, , model.name %  > );
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operations.create %>', 'POST', modelItem)
    };
    removeItem(modelID, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operations.delete %>'.replace('{{id}}', modelID), 'DELETE', null)
    };
    saveItem(modelItem, , model.name %  > , modelId, string);
    Promise << ;
    model.name %  >> {
        return: this.buildRequestAndParseAsModel('<%= model.operations.update %>'.replace('{{id}}', modelId), 'PUT', modelItem)
    };
}
