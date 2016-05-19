import {injectable, inject, Kernel, IKernel, IRequest} from "inversify";
import "reflect-metadata";

interface Parser<T>{
  parse() : string;
}

class Dog {
  name : string;
}
class Human{
  surname : string;
}

@injectable()
class HateosParser<T> implements Parser<T> {
  parse() : string {
    return "Hello HATEOAS!";
  }
}

@injectable()
class ApiParser<T> implements Parser<T> {
  parse() : string {
    return "Hello JSON!";
  }
}


abstract class DataRepository<T> {
  parser : Parser<T>;
}

@injectable()
class DogDataRepository extends DataRepository<Dog> {

  constructor(
    @inject('Parser') parser : Parser<Dog>
  ) {
    super();
    this.parser = parser;
  }
}

@injectable()
class HumanDataRepository extends DataRepository<Human> {
  constructor(
    @inject('Parser')  parser : Parser<Human>
  ) {
    super();
    this.parser = parser;
  }
}

let kernel : IKernel = new Kernel();

kernel.bind<DogDataRepository>("DogDataRepository").to(DogDataRepository);
kernel.bind<HumanDataRepository>("HumanDataRepository").to(HumanDataRepository);

console.log('got here1');
kernel.bind<Parser<any>>("Parser").to(HateosParser).when((request: IRequest) => {
    return request.parentRequest.serviceIdentifier === 'DogDataRepository';
});

kernel.bind<Parser<any>>("Parser").to(ApiParser).when((request: IRequest) => {
    return request.parentRequest.serviceIdentifier !== 'DogDataRepository';
});

var dogDataRepository = kernel.get<DogDataRepository>("DogDataRepository");
var humanDataRepository = kernel.get<HumanDataRepository>("HumanDataRepository");

console.log(dogDataRepository.parser.parse());
console.log(humanDataRepository.parser.parse());
