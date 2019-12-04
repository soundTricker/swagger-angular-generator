/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';

export enum Actions {
  START = '[Logout logout] Start',
  SUCCESS = '[Logout logout] Success',
  ERROR = '[Logout logout] Error',
}

export const start = createAction(
  Actions.START);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<object>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type LogoutAction = typeof actions;
