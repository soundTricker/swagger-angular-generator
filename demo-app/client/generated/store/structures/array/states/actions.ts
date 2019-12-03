/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {ArrayParams} from '../../../../controllers/Structures';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Structures array] Start',
  SUCCESS = '[Structures array] Success',
  ERROR = '[Structures array] Error',
}

export const start = createAction(
  Actions.START,
  props<ArrayParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.ArrayGeneratedInlineModel>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

