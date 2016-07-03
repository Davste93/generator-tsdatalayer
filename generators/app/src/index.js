"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var yeoman_generator_1 = require('yeoman-generator');
var EntityCrawler_1 = require('./EntityCrawler');
var ModelUtils_1 = require('./ModelUtils');
var _ = require('underscore');
var tsDataLayerGenerator = require('./generatorConfig');
var util = require('util');
var path = require('path');
var chalk = require('chalk');
var TSDataLayerConfig = (function () {
    function TSDataLayerConfig() {
    }
    return TSDataLayerConfig;
}());
var TSDataLayer = (function (_super) {
    __extends(TSDataLayer, _super);
    function TSDataLayer(args, options) {
        _super.call(this, args, options);
        this.configFilename = 'tsdatalayer.json';
        this.option('update', {
            desc: 'testing'
        });
        this.update = true;
    }
    TSDataLayer.prototype.prompting = function () {
        tsDataLayerGenerator.prompting(this);
    };
    ;
    TSDataLayer.prototype.installingDependencies = function () {
        tsDataLayerGenerator.installingDependencies(this);
    };
    TSDataLayer.prototype.generateObjectModel = function () {
        var _this = this;
        var done = this.async();
        var crawler = new EntityCrawler_1.EntityCrawler({
            headers: {
                'Authorization': 'Basic dGVzdDp0ZXN0' }
        });
        if (this.props.objectModelSource === 'HATEOAS') {
            crawler.crawlFromRoot(this.props.endpointUrl).then(function (entities) {
                _this.models = entities;
                var outputPath = _this.destinationPath('last.objectModel.json');
                _this.fs.write(outputPath, JSON.stringify(entities, null, '\t'));
                _this.log("I've downloaded and processed the object model! It's going to be writen to " + outputPath);
                done();
            });
        }
        else {
            var objectModel = this.fs.read(this.destinationPath(this.props.omJsonFile));
            this.models = JSON.parse(objectModel);
            done();
        }
    };
    TSDataLayer.prototype.writing = function () {
        var _this = this;
        var modelDir = this.destinationPath(this.props.dest + '/models/');
        var modelDepDir = this.destinationPath(this.props.dest + '/models/dep/');
        var dataDir = this.destinationPath(this.props.dest + '/data/');
        var serviceDir = this.destinationPath(this.props.dest + '/services/');
        var serviceSpecDir = this.destinationPath(this.props.dest + '/spec/services/');
        var authDir = this.destinationPath(this.props.dest + '/Auth/');
        var responseParserDir = this.destinationPath(this.props.dest + '/ApiResponseParsers/');
        for (var _i = 0, _a = this.models; _i < _a.length; _i++) {
            var model = _a[_i];
            this.model = model;
            this.strImports = '';
            debugger;
            if (!model.isResource) {
                for (var _b = 0, _c = ModelUtils_1.ModelUtils.getDependencies(model); _b < _c.length; _b++) {
                    var p = _c[_b];
                    this.strImports += "import {" + p.type.name + "} from './" + p.type.name + "';\n";
                }
                if (!ModelUtils_1.ModelUtils.isNativeType(model.name)) {
                    this.template('_model.ts', modelDepDir + model.name + '.ts');
                }
            }
            else {
                _.each(ModelUtils_1.ModelUtils.getDependencies(model), function (p) {
                    if (!p.type.isResource) {
                        if (!ModelUtils_1.ModelUtils.isNativeType(p.type.name)) {
                            _this.strImports += "import {" + p + "} from './dep/" + p + "';\n";
                        }
                    }
                    else {
                        _this.strImports += "import {" + p + "} from './" + p + "';\n";
                    }
                });
                this.strImports = '';
                var dependencies = ModelUtils_1.ModelUtils.getDependencies(model);
                _.each(dependencies, function (dep) {
                    _this.strImports += "import {" + dep.name + "} from '../models/" + dep.name + "';\n";
                });
                this.template('_modelDataRepositoryImpl.ts', dataDir + model.name + 'DataRepositoryImpl.ts');
            }
        }
    };
    return TSDataLayer;
}(yeoman_generator_1.Base));
exports.TSDataLayer = TSDataLayer;
module.exports = TSDataLayer;
