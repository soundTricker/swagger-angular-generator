/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {PositionsParams} from '../../../../controllers/Career';

export enum Actions {
  START = '[Career positions] Start',
  SUCCESS = '[Career positions] Success',
  ERROR = '[Career positions] Error',
}

export const start = createAction(
  Actions.START,
  props<PositionsParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<object>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

