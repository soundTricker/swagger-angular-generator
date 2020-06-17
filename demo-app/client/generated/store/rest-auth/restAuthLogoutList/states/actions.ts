/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {convertHttpHeader} from '../../../../common/utils';

export enum Actions {
  START = '[RestAuth restAuthLogoutList] Start',
  SUCCESS = '[RestAuth restAuthLogoutList] Success',
  ERROR = '[RestAuth restAuthLogoutList] Error',
}

export const start = createAction(
  Actions.START);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<void>) =>
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
export type RestAuthLogoutListAction = typeof actions;
