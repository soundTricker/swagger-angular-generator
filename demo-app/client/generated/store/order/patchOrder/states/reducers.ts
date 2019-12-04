/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Action, createReducer, on, createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as actions from './actions';

export interface PatchOrderState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<object> | null;
}

export const initialPatchOrderState: PatchOrderState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'Order_PatchOrder';
export const getPatchOrderStateSelector = createFeatureSelector<PatchOrderState>(selectorName);

const reducer = createReducer(
  initialPatchOrderState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload}) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function PatchOrderReducer(
  state: PatchOrderState | undefined,
  action: actions.PatchOrderAction) {
    return reducer(state, action);
}
