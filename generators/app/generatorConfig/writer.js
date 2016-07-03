"use strict";
var ModelUtils_1 = require('../ModelUtils');
var GeneratorWriter = (function () {
    function GeneratorWriter() {
    }
    GeneratorWriter.resolveImportsFor = function (model, generator, relativePath) {
        generator.strImports = '';
        for (var _i = 0, _a = ModelUtils_1.ModelUtils.getDependencies(model); _i < _a.length; _i++) {
            var p = _a[_i];
            generator.strImports += "import {" + p.type.name + "} from '" + (relativePath + p.type.name) + "';\n";
        }
    };
    GeneratorWriter.writeModel = function (model, generator, dir) {
        GeneratorWriter.resolveImportsFor(model, generator, './');
        if (!ModelUtils_1.ModelUtils.isNativeType(model.name)) {
            generator.template('_model.ts', dir + model.name + '.ts');
        }
    };
    GeneratorWriter.writeDataLayer = function (model, generator, dir) {
        GeneratorWriter.resolveImportsFor(model, generator, '../models/');
        if (model.isResource) {
            generator.template('_modelDataRepositoryImpl.ts', dir + model.name + 'DataRepositoryImpl.ts');
            generator.template('_modelDataRepository.ts', dir + model.name + 'DataRepository.ts');
        }
    };
    return GeneratorWriter;
}());
exports.GeneratorWriter = GeneratorWriter;
