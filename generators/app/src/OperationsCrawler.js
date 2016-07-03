'use strict';
var _ = require('underscore');
var ObjectModel_1 = require('./ObjectModel');
var ModelUtils_1 = require('./ModelUtils');
var OperationsCrawler = (function () {
    function OperationsCrawler() {
    }
    OperationsCrawler.convertEntitiesToOM = function (entities) {
        debugger;
        var objectModelList = new Array();
        _.each(entities, function (currentEntity) {
            var url = currentEntity.url.replace('/profile/', '/');
            var currentObjectModel = new ObjectModel_1.ObjectModel();
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
                _.each(currentEntity.properties, function (p) {
                    if (p.type.isResource) {
                    }
                });
            }
            objectModelList.push(currentObjectModel);
        });
        return objectModelList;
    };
    return OperationsCrawler;
}());
exports.OperationsCrawler = OperationsCrawler;
