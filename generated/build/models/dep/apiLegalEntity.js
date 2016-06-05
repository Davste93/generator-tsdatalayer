"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiLegalEntity = (function (_super) {
    __extends(apiLegalEntity, _super);
    function apiLegalEntity() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiLegalEntity.prototype, "userRef", {
        get: function () {
            return this._userRef;
        },
        set: function (value) {
            this._userRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apiLegalEntity.prototype, "accounts", {
        get: function () {
            return this._accounts;
        },
        set: function (value) {
            this._accounts = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiLegalEntity;
}(tsmvc_1.Model));
exports.apiLegalEntity = apiLegalEntity;
