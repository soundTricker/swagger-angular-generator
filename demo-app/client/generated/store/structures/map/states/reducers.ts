/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Action, createReducer, on, createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as actions from './actions';

export interface MapState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<void> | null;
}

export const initialMapState: MapState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'Structures_Map';
export const getMapStateSelector = createFeatureSelector<MapState>(selectorName);

const reducer = createReducer(
  initialMapState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
);

export function MapReducer(
  state: MapState | undefined,
  action: actions.MapAction) {
    return reducer(state, action);
}
