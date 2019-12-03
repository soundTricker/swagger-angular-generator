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

export interface RestAuthUserReadState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.UserDetails> | null;
}

export const initialRestAuthUserReadState: RestAuthUserReadState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'RestAuth_RestAuthUserRead';
export const getRestAuthUserReadStateSelector = createFeatureSelector<RestAuthUserReadState>(selectorName);

const reducer = createReducer(
  initialRestAuthUserReadState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
  );
export function RestAuthUserReadReducer(
  state: RestAuthUserReadState | undefined,
  action: Action) {
    return reducer(state, action);
}
