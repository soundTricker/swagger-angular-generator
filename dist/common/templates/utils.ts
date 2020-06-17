import {HttpHeaders} from '@angular/common/http';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

import {FormArrayExtended} from './formArrayExtended';
import {FormMap} from './formMap';

export type ControlFactory = () => AbstractControl;

/**
 * Recursively sets values of nested controls so nested object === null/undefined
 * does not cause failure as in case of AbstractControl.patchValue
 * @param control target FormControl, FormArray or FormGroup
 * @param value source data
 */
export function safeSetValue(control: AbstractControl, value: any) {
  if (control instanceof FormControl) {
    control.setValue(value, {emitEvent: false});
    return;
  }

  if (control instanceof FormArrayExtended) {
    if (nullOrUndef(value)) value = [];
    if (!Array.isArray(value)) throw new TypeError(`Cannot set value '${value}' on FormArrayExtended`);

    control.setSize(value.length);
    control.controls.forEach((c, idx) => safeSetValue(c, value[idx]));
  } else if (control instanceof FormMap) {
    if (nullOrUndef(value)) value = {};
    if (typeof value !== 'object' || Array.isArray(value)) {
      throw new TypeError(`Cannot set value '${value}' on FormMap`);
    }

    control.setShape(Object.keys(value));
    Object.entries(control.controls).forEach(([name, c]) => safeSetValue(c, value[name]));
  } else if (control instanceof FormArray) {
    control.controls.forEach((child, idx) =>
      safeSetValue(child, getValue(value, idx)));
  } else if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach(name => {
      safeSetValue(control.controls[name], getValue(value, name));
    });
  }
}

function nullOrUndef(input: any) {
  return input === undefined || input === null;
}

function getValue(input: any, attribute: string | number) {
  return nullOrUndef(input) || typeof input !== 'object' ?
    undefined :
    input[attribute];
}

export function convertHttpHeader(header?: HttpHeaders): Record<string, string[]> {
  if (!header || !header.keys) {
    return {};
  }
  return header.keys().reduce<Record<string, string[]>>((map, key) => {
    map[key] = header.getAll(key) || [];
    return map;
  }, {});
}
