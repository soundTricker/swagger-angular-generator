/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {ArrayParams} from '../../../../controllers/Structures';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Structures array] Start',
  SUCCESS = '[Structures array] Success',
  ERROR = '[Structures array] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: ArrayParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<__model.ArrayGeneratedInlineModel>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type ArrayAction = typeof actions;
