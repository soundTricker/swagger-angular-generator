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

export interface PatchOrderState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<object> | null;
  headers: Record<string, string[]> | null;
}

export const initialPatchOrderState: PatchOrderState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
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
    headers: convertHttpHeader(payload.headers),
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function PatchOrderReducer(
  state: PatchOrderState | undefined,
  action: actions.PatchOrderAction) {
    return reducer(state, action);
}
