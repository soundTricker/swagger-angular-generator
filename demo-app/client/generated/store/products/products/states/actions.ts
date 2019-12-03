/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {ProductsParams} from '../../../../controllers/Products';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Products products] Start',
  SUCCESS = '[Products products] Success',
  ERROR = '[Products products] Error',
}

export const start = createAction(
  Actions.START,
  props<ProductsParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.Products>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

