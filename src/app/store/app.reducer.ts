import { ActionReducerMap } from '@ngrx/store';
import { VesselsState, vesselsReducer } from '../vessels/state/vessels.reducer';
import { EmissionsState, emissionsReducer } from '../emissions/state/emissions.reducer';

export interface AppState {
  vessels: VesselsState;
  emissions: EmissionsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  vessels: vesselsReducer,
  emissions: emissionsReducer,
};