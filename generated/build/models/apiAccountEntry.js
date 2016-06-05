"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiAccountEntry = (function (_super) {
    __extends(apiAccountEntry, _super);
    function apiAccountEntry() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiAccountEntry.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountEntry.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountEntry.prototype, "runningBalance", {
        get: function () {
            return this._runningBalance;
        },
        set: function (value) {
            this._runningBalance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountEntry.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiAccountEntry.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        set: function (value) {
            this._timestamp = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiAccountEntry;
}(tsmvc_1.Model));
exports.apiAccountEntry = apiAccountEntry;
