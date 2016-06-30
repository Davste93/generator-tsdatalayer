import { Base } from 'yeoman-generator';
import { EntityCrawler } from './EntityCrawler';
import { Entity } from './Entity';
import { ModelUtils } from './ModelUtils';
import * as _ from 'underscore';

import * as tsDataLayerGenerator from './generatorConfig';

// JS imports
let util = require('util');
let path = require('path');
let chalk = require('chalk');
// let fs = require('fs');

class TSDataLayerConfig {
  objectModelSource: string;
  endpointUrl: string;
  omJsonFile: string;
  dest: string;
}

export class TSDataLayer extends Base {
  props: TSDataLayerConfig;
  configFilename: string = 'tsdatalayer.json';
  update: boolean;
  models: Entity[];

  constructor(args, options) {
    super(args, options);
    this.option('update', {
      desc : 'testing'
    });

    this.update = true // TODO this.options['update'];
  }

  prompting(): void {
    tsDataLayerGenerator.prompting(this);
  };

  installingDependencies(): void {
    tsDataLayerGenerator.installingDependencies(this);
  }

  generateObjectModel(): void {
    let done = this.async();
    let crawler: EntityCrawler = new EntityCrawler(
    {
      headers: {
      'Authorization' : 'Basic dGVzdDp0ZXN0'}
    });

    if (this.props.objectModelSource === 'HATEOAS') {
      // The profile crawler returns an object model from ALPS.
      crawler.crawlFromRoot(this.props.endpointUrl).then(om => {
        this.models = om;
        // If we've loaded the object model, save it to disk.
        // Todo: Add this as a config.
        let outputPath = this.destinationPath('last.objectModel.json');
        this.fs.write(outputPath, JSON.stringify(om, null, '\t'));
        this.log(`I've downloaded and processed the object model! It's going to be writen to ` + outputPath)
        done();
      });
    } else {
      // TODO: check if it exists:
      let objectModel = this.fs.read(this.destinationPath(this.props.omJsonFile));
      this.models = JSON.parse(objectModel);
      done();
    }

  }

  /** This method retrieves an object model. It can either build it by crawling
   a HATEOAS endpoint, or it can load up a JSON file. */

   /** This method performs the generation of the basic app skeleton.
   The app is pointed to a URL with HATEOAS support, and the app, entities,
   data layer, services and tests will be generated from the endpoint.
   In the (near) future, additional support will be provided for JSON endpoints.
   */
   template; // Hack, typings missing.
   model: Entity; // another hack, this should probably be a separate file
   strImports: string;
   writing() {
     let modelDir = this.destinationPath(this.props.dest + '/models/');
     let modelDepDir = this.destinationPath(this.props.dest + '/models/dep/');
     let dataDir = this.destinationPath(this.props.dest + '/data/');
     let serviceDir = this.destinationPath(this.props.dest + '/services/');
     let serviceSpecDir = this.destinationPath(this.props.dest + '/spec/services/');
     let authDir = this.destinationPath(this.props.dest + '/Auth/');
     let responseParserDir = this.destinationPath(this.props.dest + '/ApiResponseParsers/');

     // We have one service manager, we can write that straight away:
     this.sourceRoot('./generators/src/templates');
    //  this.template('_serviceManager.ts', serviceDir + 'serviceManager.ts');
    //  this.template('_BasicAuth.ts', authDir + 'BasicAuth.ts');
    //  this.template('_HateoasResponseParser.ts', responseParserDir + 'HateoasResponseParser.ts');

     // For each entity:
     for (let model of this.models) {
       this.model = model;
       this.strImports = '';
       debugger;
       if (!model.isResource) {
         for (let p of ModelUtils.getDependencies(model)) {
           this.strImports += `import {${p}} from './${p}';\n`;
         }

         this.template('_model.ts', modelDepDir + model.name + '.ts');
       }

      //  else {
      //    _.each(modelutils.getDependencies(model), p => {
      //      if (p.isDepEntity) {
      //        this.strImports += `import {${p.type}} from './dep/${p.type}';\n`;
      //      } else {
      //        this.strImports += `import {${p.type}} from './${p.type}';\n`;
      //      }
      //    });
       //
      //    this.template('_model.ts', modelDir + model.name + '.ts');
       //
      //    this.strImports = '';
      //    this.dependencies = modelutils.getResourceDeps(model);
      //    _.each(this.dependencies, mName => {
      //      this.strImports += `import {${mName}} from '../models/${mName}';\n`;
      //    });
       //
      //    this.template('_modelDataRepositoryImpl.ts', dataDir + model.name + 'DataRepositoryImpl.ts');
      //    this.template('_modelDataRepository.ts', dataDir + model.name + 'DataRepository.ts');
       //
      //    this.template('_service.spec.ts', serviceSpecDir + model.name + '.spec.ts');
      //    this.template('_service.e2e.spec.ts', serviceSpecDir + model.name + '.e2e.spec.ts');
       //
       //
      //    this.svcDeps = this.dependencies.concat(model.name);
      //    this.template('_service.ts', serviceDir + model.name + 'Service.ts');
      //  }
     }
   }
}

module.exports = TSDataLayer;
