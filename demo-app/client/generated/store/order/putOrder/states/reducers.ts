/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';

import {convertHttpHeader} from '../../../../common/utils';
import * as actions from './actions';

export interface PutOrderState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<object> | null;
  headers: Record<string, string[]> | null;
}

export const initialPutOrderState: PutOrderState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Order_PutOrder';
export const getPutOrderStateSelector = createFeatureSelector<PutOrderState>(selectorName);

const reducer = createReducer(
  initialPutOrderState,
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

export function PutOrderReducer(
  state: PutOrderState | undefined,
  action: actions.PutOrderAction) {
    return reducer(state, action);
}
