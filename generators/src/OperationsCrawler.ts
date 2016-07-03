'use strict';
import * as _ from 'underscore';
import { ObjectModel, ObjectModelOperations } from './ObjectModel';
import { Entity } from './Entity';
import { ModelUtils } from './ModelUtils';

export class OperationsCrawler {
// This method will need to generate something similar to the following on each model:
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

public static convertEntitiesToOM(entities: Array<Entity>): ObjectModel[] {
  let objectModelList = new Array<ObjectModel>();
_.each(entities, currentEntity => {
    let url = currentEntity.url.replace('/profile/', '/'); // Requests are made to same url minus /profile/
    let currentObjectModel = new ObjectModel();

    // 1. Initialize current object model
    currentObjectModel.name = currentEntity.name;
    currentObjectModel.properties = currentEntity.properties;
    currentObjectModel.isResource = currentEntity.isResource;

    if (!ModelUtils.isNativeType(currentEntity.name)) {
      currentObjectModel.operations = {
        create: url,
        find: url + '/{{id}}/',
        findAll: url,
        update: url + '/{{id}}/',
        delete: url + '/{{id}}/',
        custom : []
      };

      //   //2. Get custom calls:
        _.each(currentEntity.properties, p => {
              if (p.type.isResource) {
                // var urlData = app.getFromResourceMap(p.name.toLowerCase());
                //   if (!_.isUndefined(urlData)) {
                //
                //     var funcName = 'get' + p.name[0].toUpperCase() + p.name.slice(1);
                //     //console.log('funcname set.' + currentModel.operations);
                //
                //     if (_.isUndefined(currentModel.operations)) {
                //       currentModel.operations = {};
                //     }
                //
                //     if (_.isUndefined(currentModel.operations.custom)) {
                //       currentModel.operations.custom = {};
                //     }
                //
                //
                //     currentModel.operations.custom[funcName] = {
                //       //This looks like magic, but basically, for alps, we know the format for
                //       // non-basic CRUD operations follows something like:
                //       // http://api/externalEntity/idFromOurProperties.
                //       // However, for other projects, it may easily be:
                //       // http://api/externalEntity?idFromOurProperties
                //       // or:
                //       // http://api/externalEntity/idFromOurProperties.
                //       // So, to solve this issue, we will use the format:
                //       // http://api/externalEntity/{{idFromOurProperties}},
                //       // where anything between curly brackets can be a property.
                //       url : (urlData.uri || '').replace('/profile/', '/') + '/{{' + p.name + '}}',
                //       model : urlData.className,
                //       isList : urlData.isList
                //     };
                //   }
              }
        });
    }


    objectModelList.push(currentObjectModel);
    // 2. Extract custom operations:

  });
  return objectModelList;
  // console.log(om);
  }
}
