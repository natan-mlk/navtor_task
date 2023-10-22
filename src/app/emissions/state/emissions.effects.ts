import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as EmissionsActions from './emissions.actions';
import { EmissionsDataService } from '../services/emissions-data.service';

@Injectable()
export class EmissionsEffects {
  loadVessels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmissionsActions.loadEmissions),
      mergeMap(() =>
        this.emissionsService.getEmissionsCollection().pipe(
          map(dataEmissions => EmissionsActions.loadEmissionsSuccess({ dataEmissions })),
          catchError(error => of(EmissionsActions.loadEmissionsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private emissionsService: EmissionsDataService
  ) {}
}