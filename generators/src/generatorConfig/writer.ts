import { ModelUtils } from '../ModelUtils';
import { Entity } from '../Entity';
import { TSDataLayer } from '../';

export class GeneratorWriter {
  private static resolveImportsFor(model: Entity, generator: TSDataLayer, relativePath: string) {
    // has to be this way because generator.template uses <this>
    generator.strImports = '';


    // We want to import model dependencies.
    for (let p of ModelUtils.getDependencies(model)) {
      generator.strImports += `import {${p.type.name}} from '${relativePath + p.type.name}';\n`;
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
}
