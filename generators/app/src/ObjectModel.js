"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entity_1 = require('./Entity');
var ObjectModelOperations = (function () {
    function ObjectModelOperations() {
        this.custom = [];
    }
    return ObjectModelOperations;
}());
exports.ObjectModelOperations = ObjectModelOperations;
var ObjectModel = (function (_super) {
    __extends(ObjectModel, _super);
    function ObjectModel() {
        _super.apply(this, arguments);
    }
    return ObjectModel;
}(Entity_1.Entity));
exports.ObjectModel = ObjectModel;
