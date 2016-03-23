var modelUtils = {};

var _ = require('underscore');

const nativeTypes = ['number', 'Object', 'Date', 'string', 'boolean', 'symbol', 'void', 'null', 'undefined', 'any'];
modelUtils.isNativeType = function(type){
  return _.contains(nativeTypes, type);
};

modelUtils.getDependencies = function(model){
    var deps = [];
    _.each(model.properties, p => {
        if (!modelUtils.isNativeType(p.type) ){
          //No duplicates by "Type" key
            if (_.isUndefined(_.findWhere(deps, {type : p.type}))){
                deps.push(p);
            }
        }
    });

    return deps;
};







module.exports = modelUtils;
