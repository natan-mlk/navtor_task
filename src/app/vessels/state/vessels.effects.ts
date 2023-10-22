import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as VesselActions from './vessels.actions';
import { VesselsDataService } from '../services/vessels-data.service';

@Injectable()
export class VesselsEffects {
  loadVessels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VesselActions.loadVessels),
      mergeMap(() =>
        this.vesselsService.getVesselsCollection().pipe(
          map(dataVessels => VesselActions.loadVesselsSuccess({ dataVessels })),
          catchError(error => of(VesselActions.loadVesselsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private vesselsService: VesselsDataService
  ) {}
}