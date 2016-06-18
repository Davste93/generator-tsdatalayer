## What does this library do? ##
It generates strongly typed code from an API endpoint. This means that when the API changes, any code you wrote that has been broken by these changes **won't even compile**. This gives you the benefit 
of knowing about it before it as early on as possible.

## How does it work? ##
This generator connects to a HATEOAS endpoint, such as one provided by [SPRING data rest](http://projects.spring.io/spring-data-rest/).
It then crawls the endpoint recursively, making requests to retrieve the schema and builds typescript models from the web service response.

It builds models like the one below, with full support for complex entities:

    import {Model, indexKey, List} from  "tsmvc";
    import {apiMoney} from "./dep/apiMoney";
    
    export class apiAccount  extends Model {
        balance : apiMoney;
        currency : string;
        accountNumber : string;
        createdOn : string;
        friendlyName : string;
        accountEntries : string;
        accountPermissions : string;
    }

It then builds the data layers, services, and tests for those services - based on these models.

## Why use this library? ##

This provides the following advantages:

1. **Strong types throughout your project:**
![enter image description here](https://raw.githubusercontent.com/davidstellini/generator-tsdatalayer/master/serviceExample.gif)
2. **API Updates:** Whenever the API is updated, you can just run `yo tsdatalayer update` which will update all your models, services and data layers again. At this point,  any breaking-changes by the API will be highlighted by the typescript compiler.
3. **Real instances over type assertion:** The `reflect-metadata` library is used alongside the `typed-json` library to deserialize models and create real instances instead of using type assertion. **This means that you can be sure that the services returns only models that are valid instances and contain only your properties post-deserialization.** You can rely on types (and nested types) such as: `apiAccountInstance.balance instanceof apiMoney` to evaluate to true under all circumstances. 
4. **Automated tests**:  The generator builds unit tests for your services and one end to end test per service that calls the API backend.


## Usage ##
WARNING, THIS IS A VERY EARLY, UNDOCUMENTED, EXPERIMENTAL RELEASE:

*The generator is mostly meant to integrate with existing projects, however, if you are starting from scratch, simply run `npm init` in a directory prior to following these steps.*

1. Install yeoman (http://yeoman.io/)
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

### Example ###
Work in progress. This project will be updated as an example consumer of this library:  https://github.com/davidstellini/bvl-pay
Generation example:
![generation example](https://raw.githubusercontent.com/davidstellini/generator-tsdatalayer/master/generationExample.gif)
