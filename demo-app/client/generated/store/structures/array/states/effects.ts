/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {StructuresService} from '../../../../controllers/Structures';
import * as actions from './actions';

@Injectable()
export class ArrayEffects {
  Array = createEffect(() => this.storeActions.pipe(
    ofType(actions.start),
    switchMap(action => this.structuresService.arrayWithResponse(action.payload)
      .pipe(
        map(result => actions.success(result)),
        catchError((error: HttpErrorResponse) => of(actions.error(error))),
      ),
    ),
  ));

  constructor(
    private storeActions: Actions,
    private structuresService: StructuresService,
  ) {}
}
