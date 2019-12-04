/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Action, createReducer, on, createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface RestAuthUserPartialUpdateState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.UserDetails> | null;
}

export const initialRestAuthUserPartialUpdateState: RestAuthUserPartialUpdateState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'RestAuth_RestAuthUserPartialUpdate';
export const getRestAuthUserPartialUpdateStateSelector = createFeatureSelector<RestAuthUserPartialUpdateState>(selectorName);

const reducer = createReducer(
  initialRestAuthUserPartialUpdateState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload}) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function RestAuthUserPartialUpdateReducer(
  state: RestAuthUserPartialUpdateState | undefined,
  action: actions.RestAuthUserPartialUpdateAction) {
    return reducer(state, action);
}
