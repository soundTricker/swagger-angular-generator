/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {MapParams} from '../../../../controllers/Structures';

export enum Actions {
  START = '[Structures map] Start',
  SUCCESS = '[Structures map] Success',
  ERROR = '[Structures map] Error',
}

export const start = createAction(
  Actions.START,
  (payload: MapParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<void>) => ({payload}),
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
export type MapAction = typeof actions;
