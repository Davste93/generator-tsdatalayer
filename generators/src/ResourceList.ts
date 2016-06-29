// Allows you to access entities by name or by URL.
import {Entity} from './Entity';
export class ResourceList {

  resources: Array<Entity> = [];

  add(entity: Entity): void {
    this.resources.push(entity);
  }

  addRange(entities: Entity[]) {
    this.resources = this.resources.concat(entities);
  }

  get(url?: string, entityName?: string): Entity {
    if (url === null && entityName === null) {
      return null;
    }

    for (let entity of this.resources) {
      if ((url && entity.url === url) ||
          (entityName && entity.name === entityName)) {
            return entity
      }
    }
  }
}
