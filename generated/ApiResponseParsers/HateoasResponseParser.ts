import {Model, List, Parser} from "tsmvc";
import {injectable} from "inversify";
import typedJson from "typed-json";

@injectable()
export class HateoasResponseParser<T> implements Parser<T> {
  Parse(objType: { new(): T; }, json: any) {
    const newObj = new objType();
    const relationships = objType["relationships"] || {};

debugger;
    json = this.GetObj(json);
    for (const prop in json) {
        if (objType.prototype.hasOwnProperty(prop)) { //only set the property if it exists.
            if (newObj[prop] == null) {
                if (relationships[prop] == null) {
                    newObj[prop] = json[prop];
                }
                else {
                    newObj[prop] = this.Parse(relationships[prop], json[prop]);
                }
            }
            else {
                console.warn(`Property ${prop} not set because it already existed on the object.`);
            }
        }
    }

    return newObj;
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
