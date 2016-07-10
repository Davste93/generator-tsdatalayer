import { ModelUtils } from '../ModelUtils';
import { Entity } from '../Entity';
import { TSDataLayer } from '../';

export class GeneratorImport {
  name: string;
  onlyImportIfEntityIsResource: boolean; // todo: Dynamic filter, but this should work for now
  path: string
}

export class GeneratorWriter {
  private static resolveImportsFor(model: Entity, generator: TSDataLayer, relativePath: string, additionalImports: GeneratorImport[] = []) {
    // has to be this way because generator.template uses <this>
    generator.strImports = '';


    // We want to import model dependencies.
    for (let p of ModelUtils.getDependencies(model)) {
      generator.strImports += `import {${p.type.name}} from '${relativePath + p.type.name}';\n`;

      for (let additionalImport of additionalImports) {
        if (p.type.isResource || !additionalImport.onlyImportIfEntityIsResource) {
          generator.strImports += `import {${p.type.name + additionalImport.name}}` +
                                ` from '${additionalImport.path + p.type.name + additionalImport.name}';\n`;
        }
      }
    }
  }

  public static writeModel(model: Entity, generator: TSDataLayer, dir: string): void {
    // Resolve imports
    GeneratorWriter.resolveImportsFor(model, generator, './');

    // Write the model.
    if (!ModelUtils.isNativeType(model.name)) {
      generator.template('_model.ts', dir + model.name + '.ts');
    }
  }


  public static writeDataLayer(model: Entity, generator: TSDataLayer, dir: string) {
    // Resolve imports. Assuming models are stored in ../models (todo)
    GeneratorWriter.resolveImportsFor(model, generator, '../models/');

    // If it's a resource, write it.
    if (model.isResource) {
      generator.template('_modelDataRepositoryImpl.ts', dir + model.name + 'DataRepositoryImpl.ts');
      generator.template('_modelDataRepository.ts', dir + model.name + 'DataRepository.ts');
    }
  }


  public static writeService(model: Entity, generator: TSDataLayer, dir: string) {
    // Resolve imports. Assuming models are stored in ../models (todo)
    GeneratorWriter.resolveImportsFor(model, generator, '../models/', [
        {name : 'DataRepository', onlyImportIfEntityIsResource: true, path: '../data/'}
      ]);

    generator.svcDeps = ModelUtils.getDependencies(model).filter(dep => {
      return dep.type.isResource;
    }).map(dep => {
      return dep.type.name;
    })

    // If it's a resource, write it.
    if (model.isResource) {
         generator.template('_service.spec.ts', dir + model.name + '.spec.ts');
         generator.template('_service.e2e.spec.ts', dir + model.name + '.e2e.spec.ts');
         generator.template('_service.ts', dir + model.name + 'Service.ts');
    }
  }

  public static writeServiceManager(models: Entity[], generator: TSDataLayer, dir: string) {
    generator.svcMgrDeps = models.filter(dep => {
      return dep.isResource;
    }).map(dep => {
      return dep;
    });

    generator.template('_serviceManager.ts', dir + 'serviceManager.ts');
  }
}
