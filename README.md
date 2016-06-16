# generator-tsdatalayer
WARNING, THIS IS A VERY EARLY, UNDOCUMENTED, EXPERIMENTAL RELEASE:
This library generates the model/datalayer/service part of an application that has a HATEOAS endpoint.
It can also generate the code from a model defined from a JSON file.

An example implementing this library can be found here: https://github.com/davidstellini/bvl-pay

1. Install yeoman.
2. Create a new directory for the generated code: `mkdir generated`
3. Run `yo tsdatalayer` and follow the prompts, you can choose to generate code from a HATEOAS endpoint or an existing JSON file with the object model (<NOTE: todo>).
