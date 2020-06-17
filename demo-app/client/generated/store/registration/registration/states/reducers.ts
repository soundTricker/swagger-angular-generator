/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';

import * as actions from './actions';

export interface RegistrationState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<object> | null;
  headers: Record<string, string[]> | null;
}

export const initialRegistrationState: RegistrationState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Registration_Registration';
export const getRegistrationStateSelector = createFeatureSelector<RegistrationState>(selectorName);

const reducer = createReducer(
  initialRegistrationState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload, headers}) => ({
    ...state,
    data: payload.body,
    res: payload,
    headers,
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function RegistrationReducer(
  state: RegistrationState | undefined,
  action: actions.RegistrationAction) {
    return reducer(state, action);
}
