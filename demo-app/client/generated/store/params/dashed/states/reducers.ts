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

export interface DashedState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<void> | null;
  headers: Record<string, string[]> | null;
}

export const initialDashedState: DashedState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Params_Dashed';
export const getDashedStateSelector = createFeatureSelector<DashedState>(selectorName);

const reducer = createReducer(
  initialDashedState,
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

export function DashedReducer(
  state: DashedState | undefined,
  action: actions.DashedAction) {
    return reducer(state, action);
}
