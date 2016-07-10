import {Model, List, Parser} from 'tsmvc';
import {injectable} from 'inversify';
import {TypedJSON} from 'typedjson';
import * as _ from 'underscore';

@injectable()
export class HateoasResponseParser<T> implements Parser<T> {
  Parse(objType: { new(): T; }, json: any) {
    const newObj = new objType();
    const relationships = objType['relationships'] || {};

    let jsonStr = JSON.stringify(json); // parser is expecting a string

    let parsedObject: T = TypedJSON.parse<T>(jsonStr, objType);
    let properties = objType.prototype.__typedJsonJsonObjectMetadataInformation__._dataMembers;

    Object.keys(properties).forEach( prop => {
      let p = <any> properties[prop];
      if (p.type.name === 'Url') {
        try {
          // Add links
          parsedObject[p.key] = json._links[p.key].href;
        } catch (exception) {}
      }
    });

    return parsedObject;
}

ParseList(objType: { new(): T; }, jsonString: string): List<T>{
  var json = this.GetObj(jsonString);
  var items: List<T>  = new List<T>();

  var embedded = json._embedded;
  var data = embedded[Object.keys(embedded)[0]];


  data.forEach(modelListItem =>
  {
    var model: T = this.Parse(objType, modelListItem);
    items.add(model);
  });

  return items;
}

private GetObj(json: any) {
  if (typeof json === 'string') {
    return JSON.parse(json);
  } else {
    return json;
  }
}

}
