"use strict";
// ionimagepicker: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var ionimagepicker_core_js_1 = require("./ionimagepicker.core.js");
var ionimagepicker_components_js_1 = require("./ionimagepicker.components.js");
function defineCustomElements(win, opts) {
    return ionimagepicker_core_js_1.defineCustomElement(win, ionimagepicker_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
