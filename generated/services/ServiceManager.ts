import 'reflect-metadata';
import {Kernel, IKernel} from "inversify";


import {apiFeeDataRepository} from '../data/apiFeeDataRepository';
import {apiFeeDataRepositoryImpl} from '../data/apiFeeDataRepositoryImpl';
import {apiAccountPermissionDataRepository} from '../data/apiAccountPermissionDataRepository';
import {apiAccountPermissionDataRepositoryImpl} from '../data/apiAccountPermissionDataRepositoryImpl';
import {apiAccountDataRepository} from '../data/apiAccountDataRepository';
import {apiAccountDataRepositoryImpl} from '../data/apiAccountDataRepositoryImpl';
import {apiAccountRuleDataRepository} from '../data/apiAccountRuleDataRepository';
import {apiAccountRuleDataRepositoryImpl} from '../data/apiAccountRuleDataRepositoryImpl';
import {apiAccountEntryDataRepository} from '../data/apiAccountEntryDataRepository';
import {apiAccountEntryDataRepositoryImpl} from '../data/apiAccountEntryDataRepositoryImpl';
import {apiAccountEntryService} from './apiAccountEntryService';


var kernel : IKernel = null;

export class ServiceManager{
	public static apiAccountEntryService : apiAccountEntryService;


	static bindDependentDataLayers() {
		//Data Layer bindings
		kernel.bind<apiFeeDataRepository>("apiFeeDataRepository").to(apiFeeDataRepositoryImpl);
		kernel.bind<apiAccountPermissionDataRepository>("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl);
		kernel.bind<apiAccountDataRepository>("apiAccountDataRepository").to(apiAccountDataRepositoryImpl);
		kernel.bind<apiAccountRuleDataRepository>("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl);
		kernel.bind<apiAccountEntryDataRepository>("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl);
	}

	static bindServices(){
		//Service bindings
		kernel.bind<apiAccountEntryService>("apiAccountEntryService").to(apiAccountEntryService);
	}

	static resolveServices(){
		//Service resolve
		ServiceManager.apiAccountEntryService = kernel.get<apiAccountEntryService>("apiAccountEntryService");
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
