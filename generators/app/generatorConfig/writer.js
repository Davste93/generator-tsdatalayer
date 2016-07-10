"use strict";
var ModelUtils_1 = require('../ModelUtils');
var GeneratorImport = (function () {
    function GeneratorImport() {
    }
    return GeneratorImport;
}());
exports.GeneratorImport = GeneratorImport;
var GeneratorWriter = (function () {
    function GeneratorWriter() {
    }
    GeneratorWriter.resolveImportsFor = function (model, generator, relativePath, additionalImports) {
        if (additionalImports === void 0) { additionalImports = []; }
        generator.strImports = '';
        for (var _i = 0, _a = ModelUtils_1.ModelUtils.getDependencies(model); _i < _a.length; _i++) {
            var p = _a[_i];
            generator.strImports += "import {" + p.type.name + "} from '" + (relativePath + p.type.name) + "';\n";
            for (var _b = 0, additionalImports_1 = additionalImports; _b < additionalImports_1.length; _b++) {
                var additionalImport = additionalImports_1[_b];
                if (p.type.isResource || !additionalImport.onlyImportIfEntityIsResource) {
                    generator.strImports += ("import {" + (p.type.name + additionalImport.name) + "}") +
                        (" from '" + (additionalImport.path + p.type.name + additionalImport.name) + "';\n");
                }
            }
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
    GeneratorWriter.writeService = function (model, generator, dir) {
        GeneratorWriter.resolveImportsFor(model, generator, '../models/', [
            { name: 'DataRepository', onlyImportIfEntityIsResource: true, path: '../data/' }
        ]);
        generator.svcDeps = ModelUtils_1.ModelUtils.getDependencies(model).filter(function (dep) {
            return dep.type.isResource;
        }).map(function (dep) {
            return dep.type.name;
        });
        if (model.isResource) {
            generator.template('_service.spec.ts', dir + model.name + '.spec.ts');
            generator.template('_service.e2e.spec.ts', dir + model.name + '.e2e.spec.ts');
            generator.template('_service.ts', dir + model.name + 'Service.ts');
        }
    };
    GeneratorWriter.writeServiceManager = function (models, generator, dir) {
        generator.svcMgrDeps = models.filter(function (dep) {
            return dep.isResource;
        }).map(function (dep) {
            return dep;
        });
        generator.template('_serviceManager.ts', dir + 'serviceManager.ts');
    };
    return GeneratorWriter;
}());
exports.GeneratorWriter = GeneratorWriter;
