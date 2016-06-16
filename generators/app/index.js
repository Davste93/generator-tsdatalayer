'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');
var alpsCrawler = require('./alpsCrawler');
var fs = require('fs');


var tsdatalayerGenerator = yeoman.generators.Base.extend({
  /* Configuration */
  prompting: function() {
    var done = this.async();
    this.prompt([{
      type: 'list',
      name: 'objectModelSource',
      message: 'Hello! I can take care of the grunt work and boring data layer stuff in your application. Do you want me to ' +
        'connect to a HATEOAS endpoint, or would you like to load the object model directly from a JSON file?',
      choices: ['JSON', 'HATEOAS'],
      //Defaults to the project's folder name if the input is skipped
      default: 'HATEOAS'
    }, {
      type: 'input',
      when: function(answers) {
        return answers.objectModelSource === 'HATEOAS'
      },
      name: 'endpointUrl',
      message: 'What\'s the name of your endpoint? Please use this format: https://api.yoursite.com/profile',
      default: 'https://api.fundsrouter.com/profile'
    }, {
      type: 'input',
      when: function(answers) {
        return answers.objectModelSource === 'JSON'
      },
      name: 'omJsonFile',
      message: 'Which JSON file has your object model?',
      default: 'last.objectModel.json'
    }], function(answers) {
      this.props = answers
      done();
    }.bind(this));
  },



  /** This method retrieves an object model. It can either build it by crawling
  a HATEOAS endpoint, or it can load up a JSON file. */
  getObjectModel: function() {
    if (this.props.objectModelSource === 'HATEOAS') {
      //The profile crawler returns an object model from ALPS.
      alpsCrawler.profileCrawler(this.props.endpointUrl).then(om => {
        this.models = om;

        //If we've loaded the object model, save it to disk.
        //Todo: Add this as a config.
        var outputPath = this.destinationPath('last.objectModel.json');
        this.fs.write(outputPath, JSON.stringify(om, null, "\t"));
        this.log("I've downloaded and processed the object model! It's going to be writen to " + outputPath)
      });
    } else {
      //TODO: check if it exists:
      var objectModel = this.fs.read(this.destinationPath(this.props.omJsonFile));
      this.models = JSON.parse(objectModel);
    }

  },

  /** This method performs the generation of the basic app skeleton.
  The app is pointed to a URL with HATEOAS support, and the app, entities,
  data layer, services and tests will be generated from the endpoint.
  In the (near) future, additional support will be provided for JSON endpoints.
  */

  writing: function() {
    var modelutils = require('./modelutils');

    var modelDir = this.destinationPath('models/');
    var modelDepDir = this.destinationPath('models/dep/');
    var dataDir = this.destinationPath('data/');
    var serviceDir = this.destinationPath('services/');
    var serviceSpecDir = this.destinationPath('spec/services/');

    var self = this;

    //We have one service manager, we can write that straight away:
    self.template('_serviceManager.ts', serviceDir + 'serviceManager.ts');

    //For each entity:
    _.each(this.models, function(model) {
      self.model = model;
      self.strImports = "";

      if (model.isDepEntity) {
        _.each(modelutils.getDependencies(model), p => {
          self.strImports += `import {${p.type}} from "./${p.type}";\n`;
        });

        self.template('_model.ts', modelDepDir + model.name + '.ts');
      } else {
        _.each(modelutils.getDependencies(model), p => {
          if (p.isDepEntity) {
            self.strImports += `import {${p.type}} from "./dep/${p.type}";\n`;
          } else {
            self.strImports += `import {${p.type}} from "./${p.type}";\n`;
          }
        });

        self.template('_model.ts', modelDir + model.name + '.ts');

        self.strImports = "";
        self.dependencies = modelutils.getResourceDeps(model);
        _.each(self.dependencies, mName => {
          self.strImports += `import {${mName}} from "../models/${mName}";\n`;
        });

        self.template('_modelDataRepositoryImpl.ts', dataDir + model.name + 'DataRepositoryImpl.ts');
        self.template('_modelDataRepository.ts', dataDir + model.name + 'DataRepository.ts');

        self.template('_service.spec.ts', serviceSpecDir + model.name + '.spec.ts');
        self.template('_service.e2e.spec.ts', serviceSpecDir + model.name + '.e2e.spec.ts');


        self.svcDeps = self.dependencies.concat(model.name);
        self.template('_service.ts', serviceDir + model.name + 'Service.ts');
      }
    });
  }
});

module.exports = tsdatalayerGenerator;
