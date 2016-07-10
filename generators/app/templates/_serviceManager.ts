import 'reflect-metadata';
import {Kernel} from 'inversify';
import * as inversify from 'inversify';

import {BasicAuthDecorator} from '../Auth/BasicAuth';
import {ApiRequestDecorator, Parser} from 'tsmvc';

<%- svcMgrDeps.map(d => { return `import {${d.name}DataRepository} from '../data/${d.name}DataRepository';
import {${d.name}DataRepositoryImpl} from '../data/${d.name}DataRepositoryImpl';
import {${d.name}Service} from './${d.name}Service';\n`} ).join(''); %>

import {HateoasResponseParser} from '../ApiResponseParsers/HateoasResponseParser.ts'; // TODO: REMOVE!


let kernel: inversify.interfaces.Kernel = null;

export class ServiceManager {
<%- svcMgrDeps.map(d => {
    return `\tpublic static ${d.name}Service: ${d.name}Service;\n`
  }).join(''); -%>


  static bindDependentDataLayers() {
  // Data Layer bindings
<%- svcMgrDeps.map(d => { return `\t\tkernel.bind<${d.name}DataRepository>('${d.name}DataRepository').to(${d.name}DataRepositoryImpl);\n`;} ).join(''); %>
  }


  static bindServices() {
  // Service bindings
<%- svcMgrDeps.map(d => { return `\t\tkernel.bind<${d.name}Service>('${d.name}Service').to(${d.name}Service);\n`;} ).join(''); %>
  }

  static resolveServices() {
  // Service resolve
<%- svcMgrDeps.map(d => { return `\t\tServiceManager.${d.name}Service = kernel.get<${d.name}Service>('${d.name}Service');\n`;} ).join(''); %>
  }

  static bindDecorators() {
    kernel.bind<ApiRequestDecorator>('ApiRequestDecorator').to(BasicAuthDecorator);
    kernel.bind<string>('string').toConstantValue('test').whenTargetNamed('username');
    kernel.bind<string>('string').toConstantValue('test').whenTargetNamed('password');
  }

  // TODO: NEEDS OWN CONFIG! DECIDE ABOUT OVERWRITING, PROMPTS ETC..
  static bindParsers() {

    kernel.bind<Parser<any>>('Parser').to(HateoasResponseParser).when((request: inversify.interfaces.Request) => {
        return true; // return request.parentRequest.serviceIdentifier === 'DogDataRepository'; // TODO: temporary
    });
  }


  // Equivalent of static constructor, called when this class is imported.
  static initialize(){
    if (kernel != null) {
      return;
    }

    kernel =  new Kernel();
    ServiceManager.bindParsers();
    ServiceManager.bindDependentDataLayers();
    ServiceManager.bindServices();
    ServiceManager.bindDecorators();
    ServiceManager.resolveServices();
  }
}
ServiceManager.initialize();
