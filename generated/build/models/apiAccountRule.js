"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiAccountRule = (function (_super) {
    __extends(apiAccountRule, _super);
    function apiAccountRule() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiAccountRule.prototype, "allowedToTxOut", {
        get: function () {
            return this._allowedToTxOut;
        },
        set: function (value) {
            this._allowedToTxOut = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountRule.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountRule.prototype, "accountPermissions", {
        get: function () {
            return this._accountPermissions;
        },
        set: function (value) {
            this._accountPermissions = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiAccountRule;
}(tsmvc_1.Model));
exports.apiAccountRule = apiAccountRule;
