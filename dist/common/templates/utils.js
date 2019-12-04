"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const formArrayExtended_1 = require("./formArrayExtended");
const formMap_1 = require("./formMap");
/**
 * Recursively sets values of nested controls so nested object === null/undefined
 * does not cause failure as in case of AbstractControl.patchValue
 * @param control target FormControl, FormArray or FormGroup
 * @param value source data
 */
function safeSetValue(control, value) {
    if (control instanceof forms_1.FormControl) {
        control.setValue(value, { emitEvent: false });
        return;
    }
    if (control instanceof formArrayExtended_1.FormArrayExtended) {
        if (nullOrUndef(value))
            value = [];
        if (!Array.isArray(value))
            throw new TypeError(`Cannot set value '${value}' on FormArrayExtended`);
        control.setSize(value.length);
        control.controls.forEach((c, idx) => safeSetValue(c, value[idx]));
    }
    else if (control instanceof formMap_1.FormMap) {
        if (nullOrUndef(value))
            value = {};
        if (typeof value !== 'object' || Array.isArray(value)) {
            throw new TypeError(`Cannot set value '${value}' on FormMap`);
        }
        control.setShape(Object.keys(value));
        Object.entries(control.controls).forEach(([name, c]) => safeSetValue(c, value[name]));
    }
    else if (control instanceof forms_1.FormArray) {
        control.controls.forEach((child, idx) => safeSetValue(child, getValue(value, idx)));
    }
    else if (control instanceof forms_1.FormGroup) {
        Object.keys(control.controls).forEach(name => {
            safeSetValue(control.controls[name], getValue(value, name));
        });
    }
}
exports.safeSetValue = safeSetValue;
function nullOrUndef(input) {
    return input === undefined || input === null;
}
function getValue(input, attribute) {
    return nullOrUndef(input) || typeof input !== 'object' ?
        undefined :
        input[attribute];
}
//# sourceMappingURL=utils.js.map