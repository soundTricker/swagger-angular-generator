/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Action, createReducer, createFeatureSelector, on} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ProductsState {
  data: __model.Products | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.Products> | null;
  headers: Record<string, string[]> | null;
}

export const initialProductsState: ProductsState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Products_Products';
export const getProductsStateSelector = createFeatureSelector<ProductsState>(selectorName);

const reducer = createReducer(
  initialProductsState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, {payload, headers}) => ({
    ...state,
    data: payload.body,
    res: payload,
    headers,
    loading: false,
  })),
  on(actions.error, (state, {payload}) => ({...state, error: payload, loading: false})),
);

export function ProductsReducer(
  state: ProductsState | undefined,
  action: actions.ProductsAction) {
    return reducer(state, action);
}
