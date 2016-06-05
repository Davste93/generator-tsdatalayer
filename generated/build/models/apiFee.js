"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsmvc_1 = require("tsmvc");
var apiFee = (function (_super) {
    __extends(apiFee, _super);
    function apiFee() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(apiFee.prototype, "fixed", {
        get: function () {
            return this._fixed;
        },
        set: function (value) {
            this._fixed = value;
        },
        enumerable: true,
        configurable: true
    });
    return apiFee;
}(tsmvc_1.Model));
exports.apiFee = apiFee;
