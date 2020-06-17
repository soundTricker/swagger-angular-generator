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

export interface RestAuthUserPartialUpdateState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.UserDetails> | null;
  headers: Record<string, string[]> | null;
}

export const initialRestAuthUserPartialUpdateState: RestAuthUserPartialUpdateState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
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
    headers: convertHttpHeader(payload.headers),
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function RestAuthUserPartialUpdateReducer(
  state: RestAuthUserPartialUpdateState | undefined,
  action: actions.RestAuthUserPartialUpdateAction) {
    return reducer(state, action);
}
