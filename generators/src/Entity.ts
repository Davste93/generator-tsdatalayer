import {Property} from './Property';

export class Entity {
  name: string;
  url: string;
  properties: Array<Property>;
  isResource: boolean;
}
