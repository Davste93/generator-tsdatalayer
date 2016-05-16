import 'reflect-metadata';
import {Kernel, IKernel} from "inversify";


<%- models.map(d => { if (!d.isDepEntity) return `import {${d.name}DataRepository} from '../data/${d.name}DataRepository';
import {${d.name}DataRepositoryImpl} from '../data/${d.name}DataRepositoryImpl';
import {${d.name}Service} from './${d.name}Service';\n`} ).join(''); %>



var kernel : IKernel = null;

export class ServiceManager {
<%- models.map(d => {if (!d.isDepEntity)
    return `\tpublic static ${d.name}Service : ${d.name}Service;\n`
  } ).join(''); -%>


  static bindDependentDataLayers() {
  //Data Layer bindings
<%- models.map(d => { if (!d.isDepEntity)return `\t\tkernel.bind<${d.name}DataRepository>("${d.name}DataRepository").to(${d.name}DataRepositoryImpl);\n`} ).join(''); %>
  }


  static bindServices() {
  //Service bindings
<%- models.map(d => { if (!d.isDepEntity)return `\t\tkernel.bind<${d.name}Service>("${d.name}Service").to(${d.name}Service);\n`} ).join(''); %>
  }

  static resolveServices() {
  //Service resolve
<%- models.map(d => { if (!d.isDepEntity)return `\t\tServiceManager.${d.name}Service = kernel.get<${d.name}Service>("${d.name}Service");\n`} ).join(''); %>
  }

  //Equivalent of static constructor, called when this class is imported.
  static initialize(){
    if (kernel != null) {
      return;
    }

    kernel =  new Kernel();
    ServiceManager.bindDependentDataLayers();
    ServiceManager.bindServices();
    ServiceManager.resolveServices();
  }
}
ServiceManager.initialize();
