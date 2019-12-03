/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Action, createReducer, on, createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as actions from './actions';

export interface RestAuthLogoutCreateState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<void> | null;
}

export const initialRestAuthLogoutCreateState: RestAuthLogoutCreateState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'RestAuth_RestAuthLogoutCreate';
export const getRestAuthLogoutCreateStateSelector = createFeatureSelector<RestAuthLogoutCreateState>(selectorName);

const reducer = createReducer(
  initialRestAuthLogoutCreateState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
  );
export function RestAuthLogoutCreateReducer(
  state: RestAuthLogoutCreateState | undefined,
  action: Action) {
    return reducer(state, action);
}
