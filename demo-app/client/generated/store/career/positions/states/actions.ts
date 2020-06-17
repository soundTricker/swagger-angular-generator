/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {convertHttpHeader} from '../../../../common/utils';
import {PositionsParams} from '../../../../controllers/Career';

export enum Actions {
  START = '[Career positions] Start',
  SUCCESS = '[Career positions] Success',
  ERROR = '[Career positions] Error',
}

export const start = createAction(
  Actions.START,
  (payload: PositionsParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<object>) =>
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
export type PositionsAction = typeof actions;
