import {Kernel} from "inversify";


<%- models.map(d => { if (!d.isDepEntity) return `import {${d.name}DataRepository} from '../data/${d.name}DataRepository';
import {${d.name}DataRepositoryImpl} from '../data/${d.name}DataRepositoryImpl';
import {${d.name}Service} from './${d.name}Service';\n`} ).join(''); %>


//INIT:  This is the composition root: http://blog.ploeh.dk/2011/07/28/CompositionRoot/
//The injector should imported on app init.
var kernel  = new Kernel();

class Services {
<%- models.map(d => {if (!d.isDepEntity)
    return `\tpublic static ${d.name}Service : ${d.name}Service;\n`
  } ).join(''); -%>
}

//Data Layer bindings
<%- models.map(d => { if (!d.isDepEntity)
  return `kernel.bind<${d.name}DataRepository>("${d.name}DataRepository").to(${d.name}DataRepositoryImpl);\n`
} ).join(''); %>

//Service bindings
<%- models.map(d => { if (!d.isDepEntity)
  return `kernel.bind<${d.name}Service>("${d.name}Service").to(${d.name}Service);\n`
} ).join(''); %>


//Service resolve
<%- models.map(d => { if (!d.isDepEntity)
  return `Services.${d.name}Service = kernel.get<${d.name}Service>("${d.name}Service");\n`
} ).join(''); %>
