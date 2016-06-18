# generator-tsdatalayer
WARNING, THIS IS A VERY EARLY, UNDOCUMENTED, EXPERIMENTAL RELEASE:

This library generates the model/datalayer/service part of an application that has a HATEOAS endpoint.
It can also generate the code from a model defined from a JSON file.

An example implementing this library can be found here: https://github.com/davidstellini/bvl-pay

## Installation ##
*The generator is mostly meant to integrate with existing projects, however, if you are starting from scratch, simply run `npm init` in a directory prior to following these steps.*

1. Install yeoman.
2. Run `yo tsdatalayer` and follow the prompts, you can choose to generate code from a HATEOAS endpoint or an existing JSON file with the object model.
3. The generator will connect to your endpoint (or JSON file) and generate the models, data layers, service and service configuration.
4. The generator will then install npm dependencies to your project.
6. Ensure your `tsconfig.json` is including generator files, and a reference to the `index.d.ts` under the typings folder. Here's a sample tsconfig.json file that would work:
```
     {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "noImplicitAny": false,
            "sourceMap": false,
            "moduleResolution": "node",
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
            "outDir": "build"
        },
        "filesGlob": [
            "typings/typings.json",
            "src/**/*.ts"
        ],
        "atom": {
            "rewriteTsconfig": true
        }
      }
```


