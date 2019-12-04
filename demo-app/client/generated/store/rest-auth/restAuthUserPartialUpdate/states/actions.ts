/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {RestAuthUserPartialUpdateParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum Actions {
  START = '[RestAuth restAuthUserPartialUpdate] Start',
  SUCCESS = '[RestAuth restAuthUserPartialUpdate] Success',
  ERROR = '[RestAuth restAuthUserPartialUpdate] Error',
}

export const start = createAction(
  Actions.START,
  (payload: RestAuthUserPartialUpdateParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<__model.UserDetails>) => ({payload}),
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
export type RestAuthUserPartialUpdateAction = typeof actions;
