'use strict';
var rootUrl = 'http://api.fundsrouter.com/profile/';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');
var alpsCrawler = require('./alpsCrawler');
var generateDir = 'generated/';


var modelutils = require('./modelutils');

var modelDir = generateDir + 'models/';
var modelDepDir = generateDir + 'models/dep/';


var tsdatalayerGenerator = yeoman.generators.Base.extend({



  //Returns import string from a given model.

generateBasic: function() {


  var self = this;

  alpsCrawler.profileCrawler(rootUrl).then( om => {
    _.each(om, function(m){
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
      }
    });
  });

}
  // //Configurations will be loaded here.
  // //Ask for user input
  // prompting: function() {
  //   var done = this.async();
  //   this.prompt({
  //     type: 'input',
  //     name: 'name',
  //     message: 'Your source file:',
  //     //Defaults to the project's folder name if the input is skipped
  //     default: this.appname
  //   }, function(answers) {
  //     this.props = answers
  //     this.log(answers.name);
  //     done();
  //   }.bind(this));
  // }

});

module.exports = tsdatalayerGenerator;
