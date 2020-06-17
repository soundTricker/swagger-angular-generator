/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {convertHttpHeader} from '../../../../common/utils';
import {ArrayParams} from '../../../../controllers/Structures';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Structures array] Start',
  SUCCESS = '[Structures array] Success',
  ERROR = '[Structures array] Error',
}

export const start = createAction(
  Actions.START,
  (payload: ArrayParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<__model.ArrayGeneratedInlineModel>) =>
    ({payload, headers: convertHttpHeader(payload.headers)}),
);
// Backwards Capability Alias
export const Success = success;

export const error = createAction(
  Actions.ERROR,
  (payload: HttpErrorResponse) => ({payload}),
);
// Backwards Capability Alias
export const Error = error;

const actions = union({start, success, error});
export type ArrayAction = typeof actions;
