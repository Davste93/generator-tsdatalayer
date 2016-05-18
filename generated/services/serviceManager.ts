import 'reflect-metadata';
import {Kernel, IKernel} from "inversify";
import {BasicAuthDecorator} from "../Auth/BasicAuth";
import {ApiRequestDecorator} from "tsmvc";

import {apiAccountDataRepository} from '../data/apiAccountDataRepository';
import {apiAccountDataRepositoryImpl} from '../data/apiAccountDataRepositoryImpl';
import {apiAccountService} from './apiAccountService';
import {apiAccountRuleDataRepository} from '../data/apiAccountRuleDataRepository';
import {apiAccountRuleDataRepositoryImpl} from '../data/apiAccountRuleDataRepositoryImpl';
import {apiAccountRuleService} from './apiAccountRuleService';
import {apiAccountPermissionDataRepository} from '../data/apiAccountPermissionDataRepository';
import {apiAccountPermissionDataRepositoryImpl} from '../data/apiAccountPermissionDataRepositoryImpl';
import {apiAccountPermissionService} from './apiAccountPermissionService';
import {apiFeeDataRepository} from '../data/apiFeeDataRepository';
import {apiFeeDataRepositoryImpl} from '../data/apiFeeDataRepositoryImpl';
import {apiFeeService} from './apiFeeService';
import {apiAccountEntryDataRepository} from '../data/apiAccountEntryDataRepository';
import {apiAccountEntryDataRepositoryImpl} from '../data/apiAccountEntryDataRepositoryImpl';
import {apiAccountEntryService} from './apiAccountEntryService';




var kernel : IKernel = null;

export class ServiceManager {
	public static apiAccountService : apiAccountService;
	public static apiAccountRuleService : apiAccountRuleService;
	public static apiAccountPermissionService : apiAccountPermissionService;
	public static apiFeeService : apiFeeService;
	public static apiAccountEntryService : apiAccountEntryService;


  static bindDependentDataLayers() {
  //Data Layer bindings
		kernel.bind<apiAccountDataRepository>("apiAccountDataRepository").to(apiAccountDataRepositoryImpl);
		kernel.bind<apiAccountRuleDataRepository>("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl);
		kernel.bind<apiAccountPermissionDataRepository>("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl);
		kernel.bind<apiFeeDataRepository>("apiFeeDataRepository").to(apiFeeDataRepositoryImpl);
		kernel.bind<apiAccountEntryDataRepository>("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl);

  }


  static bindServices() {
  //Service bindings
		kernel.bind<apiAccountService>("apiAccountService").to(apiAccountService);
		kernel.bind<apiAccountRuleService>("apiAccountRuleService").to(apiAccountRuleService);
		kernel.bind<apiAccountPermissionService>("apiAccountPermissionService").to(apiAccountPermissionService);
		kernel.bind<apiFeeService>("apiFeeService").to(apiFeeService);
		kernel.bind<apiAccountEntryService>("apiAccountEntryService").to(apiAccountEntryService);

  }

  static resolveServices() {
  //Service resolve
		ServiceManager.apiAccountService = kernel.get<apiAccountService>("apiAccountService");
		ServiceManager.apiAccountRuleService = kernel.get<apiAccountRuleService>("apiAccountRuleService");
		ServiceManager.apiAccountPermissionService = kernel.get<apiAccountPermissionService>("apiAccountPermissionService");
		ServiceManager.apiFeeService = kernel.get<apiFeeService>("apiFeeService");
		ServiceManager.apiAccountEntryService = kernel.get<apiAccountEntryService>("apiAccountEntryService");

  }

  static bindDecorators() {
    kernel.bind<ApiRequestDecorator>("ApiRequestDecorator").to(BasicAuthDecorator);
    kernel.bind<string>("string").toConstantValue("test").whenTargetNamed("username");
    kernel.bind<string>("string").toConstantValue("test").whenTargetNamed("password");
  }


  //Equivalent of static constructor, called when this class is imported.
  static initialize(){
    if (kernel != null) {
      return;
    }

    kernel =  new Kernel();
    ServiceManager.bindDependentDataLayers();
    ServiceManager.bindServices();
    ServiceManager.bindDecorators();
    ServiceManager.resolveServices();
  }
}
ServiceManager.initialize();
