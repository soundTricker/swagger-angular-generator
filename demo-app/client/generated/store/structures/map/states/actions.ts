/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {MapParams} from '../../../../controllers/Structures';

export enum Actions {
  START = '[Structures map] Start',
  SUCCESS = '[Structures map] Success',
  ERROR = '[Structures map] Error',
}

export const start = createAction(
  Actions.START,
  props<MapParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<void>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

