import {request} from 'popsicle';
import * as _ from 'underscore';
import {Entity} from './Entity';
import {ResourceList} from './ResourceList';
import {AlpsEntityFactory} from './AlpsEntityFactory';
import { TypeHandler } from './TypeHandler';
import { OperationsCrawler } from './OperationsCrawler';
import { ObjectModel } from './ObjectModel';

export class EntityCrawler {

  private requestConfiguration: any;
  private internalModel: Array<Entity> = [];
  private resourceList: ResourceList;

  constructor (requestConfiguration: any= {}) {
    this.requestConfiguration         = requestConfiguration;
    this.requestConfiguration.headers = _.extend(requestConfiguration.headers || {});
    this.requestConfiguration.body    = _.extend(requestConfiguration.body || {});

    this.resourceList = new ResourceList();
  }

  crawlFromRoot(profileUrl: string): Promise<ObjectModel[]> {
    return request({
        method : 'GET',
        url : profileUrl,
        headers : this.requestConfiguration.headers,
        body : this.requestConfiguration.body
      }).then(response => {
        let profile = response.body;
        let entityCrawlerPromises = new Array<Promise<Entity>>();


        for (let e in profile._links) {
            if (e !== 'self') {
              entityCrawlerPromises.push(
                    this.crawlEntity(profile._links[e].href)
              );
            }
        }

        return Promise.all(entityCrawlerPromises).then( (entities) => {
          // We now have a list of entities! However we still have work to do,
          // the entity list needs to be converted to an object model.
          // First, we need to add each entity to the resource map.
          this.resourceList.addRange(entities); // This allows easy lookups to each entity.

          let allEntities = entities.concat(this.resourceList.getAllDependentResources());

          for (let entity of allEntities) {
            TypeHandler.resolvePropertyTypes(entity, this.resourceList);
          }

          let serializedEntities = this.entitiesToSerializableOM(allEntities);
         return serializedEntities;
        });
      });
  }

  crawlEntity(entityUrl: string): Promise<Entity> {
    let schema = {};
    let hal = {};

    return Promise.all([
      // Schema request
      request({
        method : 'GET',
        url : entityUrl,
        headers : _.extend( this.requestConfiguration.headers, {Accept: 'application/schema+json'}),
        body : this.requestConfiguration.body
      }).then(response => {
        return response.body;
      }),

      // HAL request
      request({
        method : 'GET',
        url : entityUrl,
        headers : _.extend( this.requestConfiguration.headers, {Accept: 'application/hal+json'}),
        body : this.requestConfiguration.body
      }).then(response => {
        return response.body;
      })
    ]).then( (values) => {
      let schema = values[0];
      let hal    = values[1];
      debugger;
      return AlpsEntityFactory.makeEntity(schema, hal, entityUrl, this.resourceList, false);
    });
  }

  entitiesToSerializableOM(entities: Entity[]): ObjectModel[] {
    let serializableOMEntities = _.clone(entities);

    let omEntities = OperationsCrawler.convertEntitiesToOM(serializableOMEntities);
    // The point of this is to allow only up to the second level.
    for (let entity of serializableOMEntities) {
      for (let property of entity.properties || []){
        let type = new Entity();
        type.name = property.type.name;
        type.isResource = property.type.isResource;
        property.type = type;
      }
    }


    return omEntities;
  }
}
