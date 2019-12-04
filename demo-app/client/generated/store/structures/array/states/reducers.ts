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

export interface ArrayState {
  data: __model.ArrayGeneratedInlineModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.ArrayGeneratedInlineModel> | null;
}

export const initialArrayState: ArrayState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'Structures_Array';
export const getArrayStateSelector = createFeatureSelector<ArrayState>(selectorName);

const reducer = createReducer(
  initialArrayState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload}) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function ArrayReducer(
  state: ArrayState | undefined,
  action: actions.ArrayAction) {
    return reducer(state, action);
}
