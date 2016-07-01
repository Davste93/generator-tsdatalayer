import {Model, List, Parser} from "tsmvc";
import {injectable} from "inversify";
import {TypedJSON} from "typedjson";


@injectable()
export class HateoasResponseParser<T> implements Parser<T> {
  Parse(objType: { new(): T; }, json: any) {
    const newObj = new objType();
    const relationships = objType["relationships"] || {};

    json = JSON.stringify(json); //parser is expecting a string

    return TypedJSON.parse<T>(json, objType);;
}

ParseList(objType: { new(): T; }, jsonString: string) : List<T>{
  var json = this.GetObj(jsonString);
  var items : List<T>  = new List<T>();

  var embedded = json._embedded;
  var data = embedded[Object.keys(embedded)[0]];


  data.forEach(modelListItem =>
  {
    var model : T = this.Parse(objType, modelListItem);
    items.add(model);
  });

  return items;
}

private GetObj(json : any) {
  if (typeof json === "string") {
    return JSON.parse(json);
  } else {
    return json;
  }
}

}
