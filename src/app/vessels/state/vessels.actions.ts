import { createAction, props } from '@ngrx/store';

export const loadVessels = createAction('[Vessels] Load Vessels');

export const loadVesselsSuccess = createAction(
    '[Vessels] Load Vessels Success',
    props<{ dataVessels: any[] }>()
);

export const loadVesselsFailure = createAction(
    '[Vessels] Load Vessels Failure',
    props<{ error: any }>()
);