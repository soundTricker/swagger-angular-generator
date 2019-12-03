/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {GetGoodsListParams} from '../../../../controllers/Goods';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Goods getGoodsList] Start',
  SUCCESS = '[Goods getGoodsList] Success',
  ERROR = '[Goods getGoodsList] Error',
}

export const start = createAction(
  Actions.START,
  props<GetGoodsListParams>(),
);

export const success = createAction(
  Actions.SUCCESS,
  props<HttpResponse<__model.GetGoodsListGeneratedInlineModel>>(),
);

export const error = createAction(
  Actions.ERROR,
  props<HttpErrorResponse>(),
);

