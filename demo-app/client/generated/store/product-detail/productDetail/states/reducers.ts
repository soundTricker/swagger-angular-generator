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

export interface ProductDetailState {
  data: __model.ProductDetail | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.ProductDetail> | null;
}

export const initialProductDetailState: ProductDetailState = {
  data: null,
  loading: false,
  error: null,
  res: null,
};

export const selectorName = 'ProductDetail_ProductDetail';
export const getProductDetailStateSelector = createFeatureSelector<ProductDetailState>(selectorName);

const reducer = createReducer(
  initialProductDetailState,
  on(actions.start, state => ({...state, loading: true, error: null})),
  on(actions.success, (state, payload) => ({
    ...state,
    data: payload.body,
    res: payload,
    loading: false,
  })),
  on(actions.error, (state, payload) => ({...state, error: payload, loading: false})),
);

export function ProductDetailReducer(
  state: ProductDetailState | undefined,
  action: actions.ProductDetailAction) {
    return reducer(state, action);
}
