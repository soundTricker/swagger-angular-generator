/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {LoginParams} from '../../../../controllers/Login';

export enum Actions {
  START = '[Login login] Start',
  SUCCESS = '[Login login] Success',
  ERROR = '[Login login] Error',
}

export const start = createAction(
  Actions.START,
  props<LoginParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<object>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

