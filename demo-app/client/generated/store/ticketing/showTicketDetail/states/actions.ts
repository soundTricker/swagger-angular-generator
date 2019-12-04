/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {ShowTicketDetailParams} from '../../../../controllers/Ticketing';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Ticketing showTicketDetail] Start',
  SUCCESS = '[Ticketing showTicketDetail] Success',
  ERROR = '[Ticketing showTicketDetail] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: ShowTicketDetailParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<__model.TicketDetailOutput[]>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type ShowTicketDetailAction = typeof actions;
