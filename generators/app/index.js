'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');
var generateDir = 'generated/';
var tsdatalayerGenerator = yeoman.generators.Base.extend({

//We will need to build this:



generateBasic: function() {
debugger;
  this.getObjectModel = function(){
    return [
       {
        "entityName" : "User",
        "properties": [
          {
            "name": "name",
            "type": "string",
            "entityType": "entity"
          },
          {
            "name": "surname",
            "type": "string",
            "entityType": "entity"
          },
          {
            "name": "Address",
            "type": "string",
            "entityType": "entityList"
          }
        ]
      },
      {
       "entityName" : "Address",
        "properties": [
          {
            "name": "street",
            "type": "string",
            "entityType": "entity"
          },
          {
            "name": "country",
            "type": "string",
            "entityType": "entity"
          }
        ]
      }
    ];
  }
  var models = this.getObjectModel();
  var vm = this;

  _.each(models, function(m){
    vm.model = m;
    //TODO: this.imports = ;
    vm.template('_model.ts', generateDir + m.entityName + '.ts')
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
