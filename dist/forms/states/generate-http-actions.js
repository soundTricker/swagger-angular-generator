"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const path = require("path");
const conf_1 = require("../../conf");
const utils_1 = require("../../utils");
function generateHttpActions(config, name, responseDef, actionClassNameBase, simpleName, formSubDirName, paramGroups) {
    let content = '';
    const hasParams = paramGroups.length >= 1;
    content += getActionImports(name, simpleName, hasParams, responseDef.type.startsWith('__model.'));
    content += getActionTypes(name, simpleName);
    content += getActionStartDefinition(simpleName, hasParams);
    content += getActionSuccessDefinition(responseDef);
    content += getActionErrorDefinition();
    content += getActionOverviewType(actionClassNameBase);
    const actionsFileName = path.join(formSubDirName, conf_1.stateDir, `actions.ts`);
    utils_1.writeFile(actionsFileName, content, config.header, 'ts', ['max-line-length', 'max-classes-per-file']);
}
exports.generateHttpActions = generateHttpActions;
function getActionImports(name, simpleName, hasParams, importModels) {
    let res = `import {HttpErrorResponse, HttpResponse} from '@angular/common/http';\n`;
    res += `import {createAction, props, union} from '@ngrx/store';\n`;
    if (hasParams) {
        res += `import {${_.upperFirst(simpleName)}Params} from '../../../../controllers/${name}';\n`;
    }
    if (importModels)
        res += `import * as __model from '../../../../model';\n`;
    res += `\n`;
    return res;
}
function getActionTypes(controllerName, methodName) {
    let res = `export enum Actions {\n`;
    res += utils_1.indent([
        `START = '[${controllerName} ${methodName}] Start',`,
        `SUCCESS = '[${controllerName} ${methodName}] Success',`,
        `ERROR = '[${controllerName} ${methodName}] Error',`,
    ]);
    res += `\n}\n\n`;
    return res;
}
function getActionStartDefinition(name, hasParams) {
    let res = `export const start = createAction(\n`;
    res += utils_1.indent(`Actions.START`);
    if (hasParams) {
        res += ',\n';
        const params = `${_.upperFirst(name)}Params`;
        res += utils_1.indent(`props<{payload: ${params}>(),\n`);
    }
    res += `);\n`;
    res += `\n`;
    return res;
}
function getActionSuccessDefinition(response) {
    let res = `export const success = createAction(\n`;
    res += utils_1.indent(`Actions.SUCCESS,\n`);
    res += utils_1.indent(`props<{payload: HttpResponse<${response.type}>}>(),\n`);
    res += `);\n`;
    res += `\n`;
    return res;
}
function getActionErrorDefinition() {
    let res = `export const error = createAction(\n`;
    res += utils_1.indent(`Actions.ERROR,\n`);
    res += utils_1.indent(`props<{payload: HttpErrorResponse}>(),\n`);
    res += `);\n`;
    res += `\n`;
    return res;
}
function getActionClassNameBase(name) {
    return getClassName(name);
}
exports.getActionClassNameBase = getActionClassNameBase;
function getClassName(name) {
    return _.upperFirst(name);
}
exports.getClassName = getClassName;
function getActionOverviewType(actionClassNameBase) {
    let res = `const actions = union({start, success, error});\n`;
    res += `export type ${actionClassNameBase}Action = typeof actions;\n`;
    return res;
}
//# sourceMappingURL=generate-http-actions.js.map