import { createReducer, on } from '@ngrx/store';
import * as EmissionsActions from './emissions.actions';
import { EmissionsCollectionModel } from '../models/emissions.model';

export interface EmissionsState {
  dataEmissions: EmissionsCollectionModel[];
  loadingEmissions: boolean;
  errorEmissions: any;
}

const initialState: EmissionsState = {
  dataEmissions: [],
  loadingEmissions: false,
  errorEmissions: null,
};

export const emissionsReducer = createReducer(
  initialState,
  on(EmissionsActions.loadEmissions, state => ({ ...state, loading: true })),
  on(EmissionsActions.loadEmissionsSuccess, (state, { dataEmissions }) => ({
    ...state,
    dataEmissions,
    loading: false,
  })),
  on(EmissionsActions.loadEmissionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);