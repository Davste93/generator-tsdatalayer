'use strict';
var rootUrl = 'https://api.fundsrouter.com/profile';
var baseUrl = 'https://api.fundsrouter.com/';


var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');
var alpsCrawler = require('./alpsCrawler');
var fs = require('fs');
var generateDir = 'generated/';


var modelutils = require('./modelutils');

var modelDir = generateDir + 'models/';
var modelDepDir = generateDir + 'models/dep/';
var dataDir = generateDir + 'data/';
var serviceDir = generateDir + 'services/';
var serviceSpecDir = generateDir + 'spec/services/';
var tsdatalayerGenerator = yeoman.generators.Base.extend({




/** This method performs the generation of the basic app skeleton.
The app is pointed to a URL with HATEOAS support, and the app, entities,
data layer, services and tests will be generated from the endpoint.
In the (near) future, additional support will be provided for JSON endpoints.
*/

generateBasic: function() {
  var self = this;

  //The profile crawler returns an object model from ALPS.
  alpsCrawler.profileCrawler(rootUrl).then( om => {
    self.models = om;

    //Let's save the model to disk, so that we have the option of modifying it
    //and reloading directly from this model.
    debugger;
    this.fs.write(this.destinationPath(generateDir + 'objectModel.json'), JSON.stringify(om, null, "\t"));


    self.template('_serviceManager.ts', serviceDir + 'serviceManager.ts');

    _.each(om, function(m){
      //modelutils.addBaseUrls(m, baseUrl);
      self.model = m;
      self.strImports = "";

      if (m.isDepEntity) {
        _.each(modelutils.getDependencies(m), p => {
            self.strImports += `import {${p.type}} from "./${p.type}";\n`;
        });

        self.template('_model.ts', modelDepDir + m.name + '.ts');
      } else {
        _.each(modelutils.getDependencies(m), p => {
          if (p.isDepEntity) {
            self.strImports += `import {${p.type}} from "./dep/${p.type}";\n`;
          } else {
            self.strImports += `import {${p.type}} from "./${p.type}";\n`;
          }
        });

        self.template('_model.ts', modelDir + m.name + '.ts');

        self.strImports = "";
        self.dependencies = modelutils.getResourceDeps(m);
        _.each(self.dependencies, mName => {
            self.strImports += `import {${mName}} from "../models/${mName}";\n`;
        });

        self.template('_modelDataRepositoryImpl.ts', dataDir + m.name + 'DataRepositoryImpl.ts');
        self.template('_modelDataRepository.ts', dataDir + m.name + 'DataRepository.ts');

        self.template('_service.spec.ts', serviceSpecDir + m.name + '.spec.ts');
        self.template('_service.e2e.spec.ts', serviceSpecDir + m.name + '.e2e.spec.ts');


        self.svcDeps = self.dependencies.concat(m.name);
        self.template('_service.ts', serviceDir + m.name + 'Service.ts');
      }
    });
  });
}
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'list',
      name: 'name',
      message: 'Hello! I can take care of the grunt work and boring data layer stuff in your application. Do you want me to ' +
      'connect to a HATEOAS endpoint, or would you like to load the object model directly from a JSON file?',
      choices: ['JSON', 'HATEOAS endpoint']
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, function(answers) {
      this.props = answers
      this.log(answers.name);
      done();
    }.bind(this));
  }

});

module.exports = tsdatalayerGenerator;
