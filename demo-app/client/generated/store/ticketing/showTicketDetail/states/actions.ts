/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {ShowTicketDetailParams} from '../../../../controllers/Ticketing';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Ticketing showTicketDetail] Start',
  SUCCESS = '[Ticketing showTicketDetail] Success',
  ERROR = '[Ticketing showTicketDetail] Error',
}

export const start = createAction(
  Actions.START,
  (payload: ShowTicketDetailParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<__model.TicketDetailOutput[]>) => ({payload}),
);
// Backwards Capability Alias
export const Success = success;

export const error = createAction(
  Actions.ERROR,
  (payload: HttpErrorResponse) => ({payload}),
);
// Backwards Capability Alias
export const Error = error;

const actions = union({start, success, error});
export type ShowTicketDetailAction = typeof actions;
