/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {DashedParams} from '../../../../controllers/Params';

export enum Actions {
  START = '[Params dashed] Start',
  SUCCESS = '[Params dashed] Success',
  ERROR = '[Params dashed] Error',
}

export const start = createAction(
  Actions.START,
  props<DashedParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<void>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

