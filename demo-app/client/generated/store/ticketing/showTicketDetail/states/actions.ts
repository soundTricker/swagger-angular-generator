/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {ShowTicketDetailParams} from '../../../../controllers/Ticketing';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Ticketing showTicketDetail] Start',
  SUCCESS = '[Ticketing showTicketDetail] Success',
  ERROR = '[Ticketing showTicketDetail] Error',
}

export const start = createAction(
  Actions.START,
  props<ShowTicketDetailParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.TicketDetailOutput[]>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

