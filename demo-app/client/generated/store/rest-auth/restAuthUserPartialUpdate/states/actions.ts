/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {RestAuthUserPartialUpdateParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum Actions {
  START = '[RestAuth restAuthUserPartialUpdate] Start',
  SUCCESS = '[RestAuth restAuthUserPartialUpdate] Success',
  ERROR = '[RestAuth restAuthUserPartialUpdate] Error',
}

export const start = createAction(
  Actions.START,
  props<RestAuthUserPartialUpdateParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.UserDetails>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

