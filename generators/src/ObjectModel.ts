import { Entity } from './Entity';

export class ObjectModelOperations {
  public create: string;
  public find: string;
  public findAll: string;
  public update: string;
  public delete: string;
  public custom: Array<string> = [];
}

export class ObjectModel extends Entity {
  operations: ObjectModelOperations;
}
