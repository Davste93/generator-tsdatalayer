"use strict";
var tsmvc_1 = require("tsmvc");
var HateoasResponseParser = (function () {
    function HateoasResponseParser() {
    }
    HateoasResponseParser.prototype.Parse = function (objType, json) {
        var newObj = new objType();
        var relationships = objType["relationships"] || {};
        for (var prop in json) {
            if (json.hasOwnProperty(prop)) {
                if (newObj[prop] == null) {
                    if (relationships[prop] == null) {
                        newObj[prop] = json[prop];
                    }
                    else {
                        newObj[prop] = this.Parse(relationships[prop], json[prop]);
                    }
                }
                else {
                    console.warn("Property " + prop + " not set because it already existed on the object.");
                }
            }
        }
        return newObj;
    };
    HateoasResponseParser.prototype.ParseList = function (objType, jsonString) {
        var json = JSON.parse(jsonString);
        var items = new tsmvc_1.List();
        if (!Array.isArray(json)) {
            throw ("Invalid response: " + jsonString);
        }
        json.forEach(function (modelListItem) {
            var model = modelListItem;
            items.add(model);
        });
        return items;
    };
    return HateoasResponseParser;
}());
exports.HateoasResponseParser = HateoasResponseParser;
