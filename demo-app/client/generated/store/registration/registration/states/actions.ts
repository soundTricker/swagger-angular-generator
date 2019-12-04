/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {RegistrationParams} from '../../../../controllers/Registration';

export enum Actions {
  START = '[Registration registration] Start',
  SUCCESS = '[Registration registration] Success',
  ERROR = '[Registration registration] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: RegistrationParams>(),
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
export type RegistrationAction = typeof actions;
