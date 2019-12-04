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

export interface ProductsState {
  data: __model.Products | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.Products> | null;
}

export const initialProductsState: ProductsState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'Products_Products';
export const getProductsStateSelector = createFeatureSelector<ProductsState>(selectorName);

const reducer = createReducer(
  initialProductsState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
);

export function ProductsReducer(
  state: ProductsState | undefined,
  action: Action) {
    return reducer(state, action);
}
