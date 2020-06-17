import * as path from 'path';

import {stateDir} from '../../conf';
import {Config} from '../../generate';
import {indent, writeFile} from '../../utils';

export function generateHttpReducers(config: Config, name: string, actionClassNameBase: string,
                                     formSubDirName: string, responseType: string) {
  let content = '';
  content += getReducerImports(responseType.startsWith('__model.'));
  content += getStateInteface(actionClassNameBase, responseType);
  content += getInitialState(actionClassNameBase);
  content += getFeatureSelector(name, actionClassNameBase);
  content += getCreateReducerDefinition(actionClassNameBase);
  content += getReducerDefinition(actionClassNameBase);

  const reducersFileName = path.join(formSubDirName, stateDir, `reducers.ts`);
  writeFile(reducersFileName, content, config.header);
}

function getReducerImports(usesModels: boolean) {
  let res = `import {HttpErrorResponse, HttpResponse} from '@angular/common/http';\n`;
  res += `import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';\n\n`;
  if (usesModels) res += `import * as __model from '../../../../model';\n`;

  res += `import * as actions from './actions';\n\n`;

  return res;
}

function getStateInteface(actionClassNameBase: string, type: string) {
  let res = `export interface ${actionClassNameBase}State {\n`;
  res += indent(`data: ${type} | null;\n`);
  res += indent(`loading: boolean;\n`);
  res += indent(`error: HttpErrorResponse | null;\n`);
  res += indent(`res: HttpResponse<${type}> | null;\n`);
  res += indent(`headers: Record<string, string[]> | null;\n`);
  res += `}\n\n`;

  return res;
}

function getInitialState(actionClassNameBase: string) {
  let res = `export const initial${actionClassNameBase}State: ${actionClassNameBase}State = {\n`;
  res += indent(`data: null,\n`);
  res += indent(`loading: false,\n`);
  res += indent(`error: null,\n`);
  res += indent(`res: null,\n`);
  res += indent(`headers: null,\n`);
  res += `};\n\n`;

  return res;
}

function getFeatureSelector(name: string, actionClassNameBase: string) {
  let res = `export const selectorName = '${name}_${actionClassNameBase}';\n`;
  res += `export const get${actionClassNameBase}StateSelector = ` +
         `createFeatureSelector<${actionClassNameBase}State>(selectorName);\n\n`;

  return res;
}

function getCreateReducerDefinition(actionClassNameBase: string) {
  let res = `const reducer = createReducer(\n`;
  res += indent(`initial${actionClassNameBase}State,\n`);
  res += indent(`on(actions.start, state => ({...state, loading: true, error: null})),\n`);
  res += indent(`on(actions.success, (state, {payload, headers}) => ({\n`);
  res += indent(`...state,
data: payload.body,
res: payload,
headers,
loading: false,
`, 2);
  res += indent(`})),\n`);
  res += indent(`on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),\n`);
  res += `);\n\n`;
  return res;
}

function getReducerDefinition(actionClassNameBase: string) {
  let res = `export function ${actionClassNameBase}Reducer(\n`;
  res += indent(`state: ${actionClassNameBase}State | undefined,\n`);
  res += indent(`action: actions.${actionClassNameBase}Action) {\n`);
  res += indent(`return reducer(state, action);\n`, 2);
  res += `}\n`;

  return res;
}
