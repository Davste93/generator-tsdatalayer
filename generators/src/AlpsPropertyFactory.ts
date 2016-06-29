import { Property } from './Property';
import { TypeHandler } from './TypeHandler';

export class AlpsPropertyFactory {
  public static makeProperty(schema: any, hal: any, propertyName: string, isDefinition: boolean): Property {
    return TypeHandler.parseProperty(schema, hal, propertyName, isDefinition)
  }
}
