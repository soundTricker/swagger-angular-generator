/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';
import {ProductsParams} from '../../../../controllers/Products';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Products products] Start',
  SUCCESS = '[Products products] Success',
  ERROR = '[Products products] Error',
}

export const start = createAction(
  Actions.START,
  props<{payload: ProductsParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<__model.Products>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type ProductsAction = typeof actions;
