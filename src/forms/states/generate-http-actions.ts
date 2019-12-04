import * as _ from 'lodash';
import * as path from 'path';

import {stateDir} from '../../conf';
import {Config} from '../../generate';
import {ResponseDef} from '../../requests/requests.models';
import {Parameter} from '../../types';
import {indent, writeFile} from '../../utils';

export function generateHttpActions(config: Config, name: string, responseDef: ResponseDef,
                                    actionClassNameBase: string, simpleName: string,
                                    formSubDirName: string, paramGroups: Parameter[]) {
  let content = '';
  const hasParams = paramGroups.length >= 1;
  content += getActionImports(name, simpleName, hasParams, responseDef.type.startsWith('__model.'));
  content += getActionTypes(name, simpleName);
  content += getActionStartDefinition(simpleName, hasParams);
  content += getActionSuccessDefinition(responseDef);
  content += getActionErrorDefinition();
  content += getActionOverviewType(actionClassNameBase);

  const actionsFileName = path.join(formSubDirName, stateDir, `actions.ts`);
  writeFile(actionsFileName, content, config.header, 'ts', ['max-line-length', 'max-classes-per-file']);
}

function getActionImports(name: string, simpleName: string, hasParams: boolean,
                          importModels: boolean) {
  let res = `import {HttpErrorResponse, HttpResponse} from '@angular/common/http';\n`;
  res += `import {createAction, union} from '@ngrx/store';\n`;

  if (hasParams) {
    res += `import {${_.upperFirst(simpleName)}Params} from '../../../../controllers/${name}';\n`;
  }
  if (importModels) res += `import * as __model from '../../../../model';\n`;
  res += `\n`;

  return res;
}
function getActionTypes(controllerName: string, methodName: string) {
  let res = `export enum Actions {\n`;
  res += indent([
    `START = '[${controllerName} ${methodName}] Start',`,
    `SUCCESS = '[${controllerName} ${methodName}] Success',`,
    `ERROR = '[${controllerName} ${methodName}] Error',`,
  ]);
  res += `\n}\n\n`;
  return res;
}
function getActionStartDefinition(name: string, hasParams: boolean) {
  let res = `export const start = createAction(\n`;

  res += indent(`Actions.START`);

  if (hasParams) {
    res += ',\n';
    const params = `${ _.upperFirst(name) }Params`;
    res += indent(`(payload: ${params}) => ({payload}),\n`);
  }
  res += `);\n`;
  res += `// Backwards Capability Alias\n`;
  res += `export const Start = start;\n\n`;
  return res;
}

function getActionSuccessDefinition(response: ResponseDef) {

  let res = `export const success = createAction(\n`;

  res += indent(`Actions.SUCCESS,\n`);
  res += indent(`(payload: HttpResponse<${response.type}>) => ({payload}),\n`);
  res += `);\n`;
  res += `// Backwards Capability Alias\n`;
  res += `export const Success = success;\n\n`;
  return res;
}

function getActionErrorDefinition() {

  let res = `export const error = createAction(\n`;

  res += indent(`Actions.ERROR,\n`);
  res += indent(`(payload: HttpErrorResponse) => ({payload}),\n`);
  res += `);\n`;
  res += `// Backwards Capability Alias\n`;
  res += `export const Error = error;\n\n`;
  return res;
}

export function getActionClassNameBase(name: string) {
  return getClassName(name);
}

export function getClassName(name: string) {
  return _.upperFirst(name);
}

function getActionOverviewType(actionClassNameBase: string) {
  let res = `const actions = union({start, success, error});\n`;
  res += `export type ${actionClassNameBase}Action = typeof actions;\n`;
  return res;
}
