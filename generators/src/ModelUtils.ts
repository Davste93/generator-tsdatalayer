export const nativeTypes = ['number', 'Object', 'Date', 'string', 'boolean', 'symbol', 'void', 'null', 'undefined', 'any'];

import { Entity } from './Entity';
export class ModelUtils {
  public static isNativeType(type: string) {
    return _.contains(nativeTypes, type);
  };

  // getDependencies = function(model: Entity){
  //   let deps = [];
  //   _.each(model.properties, p => {
  //       if (!this.isNativeType(p.type) ) {
  //         // No duplicates by "Type" key
  //           if (_.isUndefined(_.findWhere(deps, {type : p.type}))) {
  //               deps.push(p);
  //           }
  //       }
  //   });
  //
  //   return deps;
  // };
  //

  // getResourceDeps = function(model: Entity){
  //   let deps = [];
  //
  //   if (!_.isUndefined(model.operations) && !_.isUndefined(m.operations.custom)) {
  //     // console.log(m.operations.custom);
  //       _.each(Object.keys(m.operations.custom), k => {
  //          deps.push(m.operations.custom[k].model);
  //      });
  //   }
  //
  //   return deps;
  // };
  //
  //
  // function isUrl(str){
  //   if (_.isEmpty(str)) return false;
  //   return str.toLowerCase().startsWith("http://");
  // }
  //
  // //If accessor property is not set for model properties, the base URL is added to the
  // // URL, but only if the URL does not begin with http://.
  // addBaseUrls = function(m, baseUrl){
  //   if (!_.isUndefined(m.operations)) {
  //     if (!_.isUndefined(m.operations.crud)) {
  //       _.each(Object.keys(m.operations.crud), oKey=> {
  //         if (!isUrl(m.operations.crud[oKey])){
  //             m.operations.crud[oKey] = baseUrl + m.operations.crud[oKey];
  //         }
  //       });
  //     }
  //
  //     if (!_.isUndefined(m.operations.custom)) {
  //       _.each(Object.keys(m.operations.custom ), oKey=> {
  //         if (!isUrl(m.operations.custom[oKey].url)){
  //             m.operations.custom[oKey].url = baseUrl + m.operations.custom[oKey];
  //         }
  //       });
  //     }
  //   }
  // };
  //
  //
  //


}
