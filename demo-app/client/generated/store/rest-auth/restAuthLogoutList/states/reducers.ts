/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';

import * as actions from './actions';

export interface RestAuthLogoutListState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<void> | null;
  headers: Record<string, string[]> | null;
}

export const initialRestAuthLogoutListState: RestAuthLogoutListState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'RestAuth_RestAuthLogoutList';
export const getRestAuthLogoutListStateSelector = createFeatureSelector<RestAuthLogoutListState>(selectorName);

const reducer = createReducer(
  initialRestAuthLogoutListState,
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

export function RestAuthLogoutListReducer(
  state: RestAuthLogoutListState | undefined,
  action: actions.RestAuthLogoutListAction) {
    return reducer(state, action);
}
