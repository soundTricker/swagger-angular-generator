/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {OrderParams} from '../../../../controllers/Order';

export enum Actions {
  START = '[Order order] Start',
  SUCCESS = '[Order order] Success',
  ERROR = '[Order order] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: OrderParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<object>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type OrderAction = typeof actions;
