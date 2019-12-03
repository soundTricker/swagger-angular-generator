/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';

export enum Actions {
  START = '[RestAuth restAuthLogoutCreate] Start',
  SUCCESS = '[RestAuth restAuthLogoutCreate] Success',
  ERROR = '[RestAuth restAuthLogoutCreate] Error',
}

export const start = createAction(
  Actions.START);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<void>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

