/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Action, createReducer, on, createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as actions from './actions';

export interface LogoutState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<object> | null;
}

export const initialLogoutState: LogoutState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'Logout_Logout';
export const getLogoutStateSelector = createFeatureSelector<LogoutState>(selectorName);

const reducer = createReducer(
  initialLogoutState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
);

export function LogoutReducer(
  state: LogoutState | undefined,
  action: actions.LogoutAction) {
    return reducer(state, action);
}
