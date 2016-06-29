import * as yo from 'yeoman-generator';
import {EntityCrawler} from './EntityCrawler';

class TSDataLayer extends yo.generators.Base {
  constructor(args, options) {
    super(args, options);
  }

  generateObjectModel(): void {
    let crawler: EntityCrawler = new EntityCrawler(
      {
        headers: {
        'Authorization' : 'Basic dGVzdDp0ZXN0'}
      });

      crawler.crawlFromRoot('https://api.fundsrouter.com/profile');
  }
}
module.exports = TSDataLayer;




// 'use strict';
// let util = require('util');
// let path = require('path');
// let yeoman = require('yeoman-generator');
// let chalk = require('chalk');
// let _ = require('underscore');
// let alpsCrawler = require('./alpsCrawler');
// let fs = require('fs');
//
//
// let configFilename = 'tsdatalayer.json';
//
// let tsdatalayerGenerator = yeoman.generators.Base.extend({
//
//   constructor: function () {
//      yeoman.generators.Base.apply(this, arguments);
//      this.argument('update', { required : false });
//    },
//
//   /* Configuration */
//   prompting: function() {
//     let done = this.async();
//
//     if (this.update) {
//       // This is an update, there's no need to prompt the user for information.
//       // We will just connect to the last endpoint.
//       let lastCfg = JSON.parse(this.fs.read(this.destinationPath(configFilename)));
//       this.props = {
//         'objectModelSource' : lastCfg.objectModelSource,
//         'endpointUrl' : lastCfg.endpointUrl,
//         'omJsonFile' : lastCfg.omJsonFile,
//         'dest' : lastCfg.dest
//       }
//
//       this.log(`I'm updating your ${lastCfg.dest} folder, with the following datasource:\n` +
//       `${lastCfg.objectModelSource} [${lastCfg.endpointUrl || lastCfg.omJsonFile}]`
//       );
//
//
//       done();
//       return;
//     }
//
//     this.prompt([{
//       type: 'list',
//       name: 'objectModelSource',
//       message: 'Hello! I can take care of the grunt work and boring data layer stuff in your application. Do you want me to ' +
//         'connect to a HATEOAS endpoint, or would you like to load the object model directly from a JSON file?',
//       choices: ['JSON', 'HATEOAS'],
//       // Defaults to the project's folder name if the input is skipped
//       default: 'HATEOAS'
//     }, {
//       type: 'input',
//       when: function(answers) {
//         return answers.objectModelSource === 'HATEOAS'
//       },
//       name: 'endpointUrl',
//       message: 'What\'s the name of your endpoint? Please use this format: https://api.yoursite.com/profile',
//       default: 'https://api.fundsrouter.com/profile'
//     }, {
//       type: 'input',
//       when: function(answers) {
//         return answers.objectModelSource === 'JSON'
//       },
//       name: 'omJsonFile',
//       message: 'Which JSON file has your object model?',
//       default: 'last.objectModel.json'
//     },
//     {type: 'input',
//     name: 'dest',
//     message: 'Where should I place the generated files?',
//     default: 'src/app/generated'
//     }], function(answers) {
//       this.props = answers;
//       this.fs.write(this.destinationPath(configFilename), JSON.stringify(answers, null, '\t'));
//
//       done();
//     }.bind(this));
//   },
//
//   installingDependencies: function() {
//     if (this.update) {
//       // We only install dependencies the first time.
//       return;
//     }
//
//     this.npmInstall(['inversify@2.0.0-beta.8', 'underscore', 'urlsafe-base64', 'tsmvc']);
//     // The inversify library is constantly throwing out breaking changes.
//     // We will wait until it's stable before ugprading again. For this reason, we're locking the version.
//
//     // Install typed dependencies.
//     this.npmInstall(['inversify-dts', 'typedjson', 'typings'], { 'saveDev': true }, () => {
//       this.spawnCommand('typings', ['install', '--save', '--global', 'npm:inversify-dts/inversify/inversify.d.ts']);
//       this.spawnCommand('typings', ['install', '--save', '--global', 'dt~node']);
//       this.spawnCommand('typings', ['install', '--save', '--global', 'dt~underscore']);
//       this.spawnCommand('typings', ['install', '--save', '--global', 'dt~jasmine']);
//       this.spawnCommand('typings', ['install', '--save', '--global', 'dt~urlsafe-base64']);
//       this.spawnCommand('typings', ['install', '--save', 'npm:typedjson/js/index.d.ts']);
//     });
//   },
//
//
//   /** This method retrieves an object model. It can either build it by crawling
//   a HATEOAS endpoint, or it can load up a JSON file. */
//   getObjectModel: function() {
//     let done = this.async();
//     let self = this;
//
//     if (this.props.objectModelSource === 'HATEOAS') {
//       // The profile crawler returns an object model from ALPS.
//       alpsCrawler.profileCrawler(this.props.endpointUrl).then(om => {
//         self.models = om;
//         // If we've loaded the object model, save it to disk.
//         // Todo: Add this as a config.
//         let outputPath = self.destinationPath('last.objectModel.json');
//         self.fs.write(outputPath, JSON.stringify(om, null, '\t'));
//         self.log(`I've downloaded and processed the object model! It's going to be writen to ` + outputPath)
//         done();
//       });
//     } else {
//       // TODO: check if it exists:
//       let objectModel = this.fs.read(this.destinationPath(this.props.omJsonFile));
//       this.models = JSON.parse(objectModel);
//       done();
//     }
//
//   },
//
//   /** This method performs the generation of the basic app skeleton.
//   The app is pointed to a URL with HATEOAS support, and the app, entities,
//   data layer, services and tests will be generated from the endpoint.
//   In the (near) future, additional support will be provided for JSON endpoints.
//   */
//
//   writing: function() {
//     let modelutils = require('./modelutils');
//
//     let modelDir = this.destinationPath(this.props.dest + '/models/');
//     let modelDepDir = this.destinationPath(this.props.dest + '/models/dep/');
//     let dataDir = this.destinationPath(this.props.dest + '/data/');
//     let serviceDir = this.destinationPath(this.props.dest + '/services/');
//     let serviceSpecDir = this.destinationPath(this.props.dest + '/spec/services/');
//     let authDir = this.destinationPath(this.props.dest + '/Auth/');
//     let responseParserDir = this.destinationPath(this.props.dest + '/ApiResponseParsers/');
//
//     let self = this;
//     // We have one service manager, we can write that straight away:
//     self.template('_serviceManager.ts', serviceDir + 'serviceManager.ts');
//     self.template('_BasicAuth.ts', authDir + 'BasicAuth.ts');
//     self.template('_HateoasResponseParser.ts', responseParserDir + 'HateoasResponseParser.ts');
//
//     // For each entity:
//     _.each(this.models, function(model) {
//       self.model = model;
//       self.strImports = '';
//
//       if (model.isDepEntity) {
//         _.each(modelutils.getDependencies(model), p => {
//           self.strImports += `import {${p.type}} from './${p.type}';\n`;
//         });
//
//         self.template('_model.ts', modelDepDir + model.name + '.ts');
//       } else {
//         _.each(modelutils.getDependencies(model), p => {
//           if (p.isDepEntity) {
//             self.strImports += `import {${p.type}} from './dep/${p.type}';\n`;
//           } else {
//             self.strImports += `import {${p.type}} from './${p.type}';\n`;
//           }
//         });
//
//         self.template('_model.ts', modelDir + model.name + '.ts');
//
//         self.strImports = '';
//         self.dependencies = modelutils.getResourceDeps(model);
//         _.each(self.dependencies, mName => {
//           self.strImports += `import {${mName}} from '../models/${mName}';\n`;
//         });
//
//         self.template('_modelDataRepositoryImpl.ts', dataDir + model.name + 'DataRepositoryImpl.ts');
//         self.template('_modelDataRepository.ts', dataDir + model.name + 'DataRepository.ts');
//
//         self.template('_service.spec.ts', serviceSpecDir + model.name + '.spec.ts');
//         self.template('_service.e2e.spec.ts', serviceSpecDir + model.name + '.e2e.spec.ts');
//
//
//         self.svcDeps = self.dependencies.concat(model.name);
//         self.template('_service.ts', serviceDir + model.name + 'Service.ts');
//       }
//     });
//   }
// });
//
// module.exports = tsdatalayerGenerator;
