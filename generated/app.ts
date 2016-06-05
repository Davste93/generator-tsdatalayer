import {injectable, inject, Kernel, IKernel, IRequest} from "inversify";
import "reflect-metadata";
//
// function logType(target : any, key : string) {
//   var t = Reflect.getMetadata("design:type", target, key);
//   console.log(`${key} type: ${t.name}`);
// }
//
// class Demo{
//   @logType // apply property decorator
//   public attr1 : string;
// }

import {JsonObject, JsonMember, TypedJSON} from "typedjson";
@JsonObject
class Person {
    @JsonMember
    firstName: string;

    @JsonMember
    lastName: string;

    public getFullname() {
        return this.firstName + " " + this.lastName;
    }
}

export function test(log: boolean) {
    var person = TypedJSON.parse('{ "firstName": "John", "lastName": "Doe" }', Person);

    person instanceof Person; // true
    person.getFullname(); // "John Doe"

    return person.getFullname() === "John Doe" && person instanceof Person;
  }
