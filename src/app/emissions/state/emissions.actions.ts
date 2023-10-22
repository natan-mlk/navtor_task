import { createAction, props } from '@ngrx/store';
import { EmissionsCollectionModel } from '../models/emissions.model';

export const loadEmissions = createAction('[Emissions] Load Emissions');

export const loadEmissionsSuccess = createAction(
    '[Emissions] Load Emissions Success',
    props<{ dataEmissions: EmissionsCollectionModel[] }>()
);

export const loadEmissionsFailure = createAction(
    '[Emissions] Load Emissions Failure',
    props<{ error: any }>()
);