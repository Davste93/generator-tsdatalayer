"use strict";
var ResourceList = (function () {
    function ResourceList() {
        this.resources = [];
    }
    ResourceList.prototype.add = function (entity) {
        this.resources.push(entity);
    };
    ResourceList.prototype.get = function (url, entityName) {
        if (url === null && entityName === null) {
            return null;
        }
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var entity = _a[_i];
            if ((url && entity.url === url) ||
                (entityName && entity.name === entityName)) {
                return entity;
            }
        }
    };
    return ResourceList;
}());
exports.ResourceList = ResourceList;
