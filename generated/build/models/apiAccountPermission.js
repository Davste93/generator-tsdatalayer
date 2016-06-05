"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiAccountPermission = (function (_super) {
    __extends(apiAccountPermission, _super);
    function apiAccountPermission() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiAccountPermission.prototype, "allow", {
        get: function () {
            return this._allow;
        },
        set: function (value) {
            this._allow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountPermission.prototype, "accountRule", {
        get: function () {
            return this._accountRule;
        },
        set: function (value) {
            this._accountRule = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountPermission.prototype, "onBehalfOf", {
        get: function () {
            return this._onBehalfOf;
        },
        set: function (value) {
            this._onBehalfOf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountPermission.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiAccountPermission;
}(tsmvc_1.Model));
exports.apiAccountPermission = apiAccountPermission;
