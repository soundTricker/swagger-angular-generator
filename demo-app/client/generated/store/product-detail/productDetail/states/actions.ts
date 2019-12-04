/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {ProductDetailParams} from '../../../../controllers/ProductDetail';
import * as __model from '../../../../model';

export enum Actions {
  START = '[ProductDetail productDetail] Start',
  SUCCESS = '[ProductDetail productDetail] Success',
  ERROR = '[ProductDetail productDetail] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: ProductDetailParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<__model.ProductDetail>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type ProductDetailAction = typeof actions;
