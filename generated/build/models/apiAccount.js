"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiAccount = (function (_super) {
    __extends(apiAccount, _super);
    function apiAccount() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "currency", {
        get: function () {
            return this._currency;
        },
        set: function (value) {
            this._currency = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        set: function (value) {
            this._accountNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "createdOn", {
        get: function () {
            return this._createdOn;
        },
        set: function (value) {
            this._createdOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "friendlyName", {
        get: function () {
            return this._friendlyName;
        },
        set: function (value) {
            this._friendlyName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "accountEntries", {
        get: function () {
            return this._accountEntries;
        },
        set: function (value) {
            this._accountEntries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccount.prototype, "accountPermissions", {
        get: function () {
            return this._accountPermissions;
        },
        set: function (value) {
            this._accountPermissions = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiAccount;
}(tsmvc_1.Model));
exports.apiAccount = apiAccount;
