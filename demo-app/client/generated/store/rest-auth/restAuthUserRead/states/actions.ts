/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  START = '[RestAuth restAuthUserRead] Start',
  SUCCESS = '[RestAuth restAuthUserRead] Success',
  ERROR = '[RestAuth restAuthUserRead] Error',
}

export const start = createAction(
  Actions.START);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<__model.UserDetails>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type RestAuthUserReadAction = typeof actions;
