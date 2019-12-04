/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {OrderParams} from '../../../../controllers/Order';

export enum Actions {
  START = '[Order order] Start',
  SUCCESS = '[Order order] Success',
  ERROR = '[Order order] Error',
}

export const start = createAction(
  Actions.START,
  (payload: OrderParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<object>) => ({payload}),
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
export type OrderAction = typeof actions;
