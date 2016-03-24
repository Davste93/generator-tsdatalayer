import {Kernel} from "inversify";
import {apiAccountDataRepository} from '../data/apiAccountDataRepository';
import {apiAccountDataRepositoryImpl} from '../data/apiAccountDataRepositoryImpl';

//INIT:  This is the composition root: http://blog.ploeh.dk/2011/07/28/CompositionRoot/
//The injector should be called at

var kernel  = new Kernel();
kernel.bind<apiAccountDataRepository>("apiAccountDataRepository").to(apiAccountDataRepositoryImpl);




class Services {
  //public static accountService : service;
}
