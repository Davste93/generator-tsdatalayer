// Allows you to access entities by name or by URL.
import {Entity} from './Entity';
import * as _ from 'underscore';

export class ResourceList {

  entityDictionary = {};

  add(entity: Entity): void {
    if (!entity.url) {
      throw new Error('You cannot add an entity with an invalid URL.');
    }

    this.entityDictionary[entity.url] = entity;
  }

  addRange(entities: Entity[]) {
    for (let entity of entities){
        this.add(entity);
    }
  }

  get(url: string): Entity {
    if (!_.isUndefined(this.entityDictionary[url])) {
      return this.entityDictionary[url];
    } else {
      console.warn("Unknown lookup:" + url);
    }
  }

  getAllDependentResources(): Entity[] {
    let entities = new Array<Entity>();
    for (let entityKey in this.entityDictionary) {
      let entity = this.entityDictionary[entityKey];
      if (!entity.isResource) {
        entities.push(entity);
      }
    }

    return entities;
  }
}
