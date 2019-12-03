/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {ProductDetailParams} from '../../../../controllers/ProductDetail';
import * as __model from '../../../../model';

export enum Actions {
  START = '[ProductDetail productDetail] Start',
  SUCCESS = '[ProductDetail productDetail] Success',
  ERROR = '[ProductDetail productDetail] Error',
}

export const start = createAction(
  Actions.START,
  props<ProductDetailParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.ProductDetail>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

