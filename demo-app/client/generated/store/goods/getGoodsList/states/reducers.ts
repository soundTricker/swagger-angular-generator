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

export interface GetGoodsListState {
  data: __model.GetGoodsListGeneratedInlineModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
  res: HttpResponse<__model.GetGoodsListGeneratedInlineModel> | null;
  headers: Record<string, string[]> | null;
}

export const initialGetGoodsListState: GetGoodsListState = {
  data: null,
  loading: false,
  error: null,
  res: null,
  headers: null,
};

export const selectorName = 'Goods_GetGoodsList';
export const getGetGoodsListStateSelector = createFeatureSelector<GetGoodsListState>(selectorName);

const reducer = createReducer(
  initialGetGoodsListState,
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

export function GetGoodsListReducer(
  state: GetGoodsListState | undefined,
  action: actions.GetGoodsListAction) {
    return reducer(state, action);
}
