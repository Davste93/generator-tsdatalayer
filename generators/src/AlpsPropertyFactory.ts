import { Property } from './Property';
import { TypeHandler } from './TypeHandler';

let tense = new (require('tense'))();

export class AlpsPropertyFactory {
  public static makeProperty(schema: any, hal: any, propertyName: string, isDefinition: boolean): Property {
    return TypeHandler.parseProperty(schema, hal, propertyName, isDefinition)
  }
}
