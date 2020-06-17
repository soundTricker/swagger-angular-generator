/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, union} from '@ngrx/store';
import {convertHttpHeader} from '../../../../common/utils';
import {ProductsParams} from '../../../../controllers/Products';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Products products] Start',
  SUCCESS = '[Products products] Success',
  ERROR = '[Products products] Error',
}

export const start = createAction(
  Actions.START,
  (payload: ProductsParams) => ({payload}),
);
// Backwards Capability Alias
export const Start = start;

export const success = createAction(
  Actions.SUCCESS,
  (payload: HttpResponse<__model.Products>) =>
    ({payload, headers: convertHttpHeader(payload.headers)}),
);
// Backwards Capability Alias
export const Success = success;

export const error = createAction(
  Actions.ERROR,
  (payload: HttpErrorResponse) => ({payload}),
);
// Backwards Capability Alias
export const Error = error;

const actions = union({start, success, error});
export type ProductsAction = typeof actions;
