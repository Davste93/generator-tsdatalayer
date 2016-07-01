'use strict';
var _ = require('underscore');
var ObjectModel_1 = require('./ObjectModel');
var ModelUtils_1 = require('./ModelUtils');
var OperationsCrawler = (function () {
    function OperationsCrawler() {
    }
    //This method will need to generate something similar to the following on each model:
    /* "model": "user",
     "operations": {
        crud : {
         "create": "/user/{{id}}/",
         "read": "/user/{{id}}/",
         "readAll": "/user/",
         "update": "/user/{{id}}/",
         "delete": "/user/{{id}}/"
       },
       custom : {
         "getAddresses": {
           "url" : "",
           "model": "Address",
           "entityType": "List"
         },
         "getJob": {
           "url" : "",
           "model": "Job",
           "entityType": "Entity"
         }
      }
     }
     */
    // Call only after all the schema has been populated
    OperationsCrawler.convertEntitiesToOM = function (entities) {
        debugger;
        var objectModelList = new Array();
        _.each(entities, function (currentEntity) {
            var url = currentEntity.url.replace('/profile/', '/'); // Requests are made to same url minus /profile/
            var currentObjectModel = new ObjectModel_1.ObjectModel();
            // 1. Initialize current object model
            currentObjectModel.name = currentEntity.name;
            currentObjectModel.properties = currentEntity.properties;
            currentObjectModel.isResource = currentEntity.isResource;
            if (!ModelUtils_1.ModelUtils.isNativeType(currentEntity.name)) {
                currentObjectModel.operations = {
                    create: url,
                    find: url + '/{{id}}/',
                    findAll: url,
                    update: url + '/{{id}}/',
                    delete: url + '/{{id}}/',
                    custom: []
                };
                //   //2. Get custom calls:
                _.each(currentEntity.properties, function (p) {
                    if (p.type.isResource) {
                        debugger;
                    }
                });
            }
            objectModelList.push(currentObjectModel);
            // 2. Extract custom operations:
        });
        return objectModelList;
        // console.log(om);
    };
    return OperationsCrawler;
}());
exports.OperationsCrawler = OperationsCrawler;
