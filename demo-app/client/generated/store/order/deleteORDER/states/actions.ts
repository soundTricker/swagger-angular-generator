/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {DeleteORDERParams} from '../../../../controllers/Order';

export enum Actions {
  START = '[Order deleteORDER] Start',
  SUCCESS = '[Order deleteORDER] Success',
  ERROR = '[Order deleteORDER] Error',
}

export const start = createAction(
  Actions.START,
  props<DeleteORDERParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<object>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

