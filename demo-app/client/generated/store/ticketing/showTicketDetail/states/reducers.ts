/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';

import {convertHttpHeader} from '../../../../common/utils';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface ShowTicketDetailState {
  data: __model.TicketDetailOutput[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.TicketDetailOutput[]> | null;
  headers: Record<string, string[]> | null;
}

export const initialShowTicketDetailState: ShowTicketDetailState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Ticketing_ShowTicketDetail';
export const getShowTicketDetailStateSelector = createFeatureSelector<ShowTicketDetailState>(selectorName);

const reducer = createReducer(
  initialShowTicketDetailState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload}) => ({
    ...state,
    data: payload.body,
    res: payload,
    headers: convertHttpHeader(payload.headers),
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function ShowTicketDetailReducer(
  state: ShowTicketDetailState | undefined,
  action: actions.ShowTicketDetailAction) {
    return reducer(state, action);
}
