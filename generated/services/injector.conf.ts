import {Kernel} from "inversify";


import {apiAccountEntryDataRepository} from '../data/apiAccountEntryDataRepository';
import {apiAccountEntryDataRepositoryImpl} from '../data/apiAccountEntryDataRepositoryImpl';
import {apiAccountEntryService} from './apiAccountEntryService';
import {apiFeeDataRepository} from '../data/apiFeeDataRepository';
import {apiFeeDataRepositoryImpl} from '../data/apiFeeDataRepositoryImpl';
import {apiFeeService} from './apiFeeService';
import {apiAccountDataRepository} from '../data/apiAccountDataRepository';
import {apiAccountDataRepositoryImpl} from '../data/apiAccountDataRepositoryImpl';
import {apiAccountService} from './apiAccountService';
import {apiAccountRuleDataRepository} from '../data/apiAccountRuleDataRepository';
import {apiAccountRuleDataRepositoryImpl} from '../data/apiAccountRuleDataRepositoryImpl';
import {apiAccountRuleService} from './apiAccountRuleService';
import {apiAccountPermissionDataRepository} from '../data/apiAccountPermissionDataRepository';
import {apiAccountPermissionDataRepositoryImpl} from '../data/apiAccountPermissionDataRepositoryImpl';
import {apiAccountPermissionService} from './apiAccountPermissionService';



//INIT:  This is the composition root: http://blog.ploeh.dk/2011/07/28/CompositionRoot/
//The injector should imported on app init.
var kernel  = new Kernel();

class Services {
	public static apiAccountEntryService : apiAccountEntryService;
	public static apiFeeService : apiFeeService;
	public static apiAccountService : apiAccountService;
	public static apiAccountRuleService : apiAccountRuleService;
	public static apiAccountPermissionService : apiAccountPermissionService;
}

//Data Layer bindings
kernel.bind<apiAccountEntryDataRepository>("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl);
kernel.bind<apiFeeDataRepository>("apiFeeDataRepository").to(apiFeeDataRepositoryImpl);
kernel.bind<apiAccountDataRepository>("apiAccountDataRepository").to(apiAccountDataRepositoryImpl);
kernel.bind<apiAccountRuleDataRepository>("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl);
kernel.bind<apiAccountPermissionDataRepository>("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl);


//Service bindings
kernel.bind<apiAccountEntryService>("apiAccountEntryService").to(apiAccountEntryService);
kernel.bind<apiFeeService>("apiFeeService").to(apiFeeService);
kernel.bind<apiAccountService>("apiAccountService").to(apiAccountService);
kernel.bind<apiAccountRuleService>("apiAccountRuleService").to(apiAccountRuleService);
kernel.bind<apiAccountPermissionService>("apiAccountPermissionService").to(apiAccountPermissionService);



//Service resolve
Services.apiAccountEntryService = kernel.get<apiAccountEntryService>("apiAccountEntryService");
Services.apiFeeService = kernel.get<apiFeeService>("apiFeeService");
Services.apiAccountService = kernel.get<apiAccountService>("apiAccountService");
Services.apiAccountRuleService = kernel.get<apiAccountRuleService>("apiAccountRuleService");
Services.apiAccountPermissionService = kernel.get<apiAccountPermissionService>("apiAccountPermissionService");

