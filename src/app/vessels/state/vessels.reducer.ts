import { createReducer, on } from '@ngrx/store';
import * as VesselActions from './vessels.actions';
import { VesselDataModel } from '../models/vessels.model';

export interface VesselsState {
    dataVessels: VesselDataModel[];
    loadingVessels: boolean;
    errorVessels: any;
}

const initialState: VesselsState = {
    dataVessels: [],
    loadingVessels: false,
    errorVessels: null,
};

export const vesselsReducer = createReducer(
  initialState,
  on(VesselActions.loadVessels, state => ({ ...state, loading: true })),
  on(VesselActions.loadVesselsSuccess, (state, { dataVessels }) => ({
    ...state,
    dataVessels,
    loading: false,
  })),
  on(VesselActions.loadVesselsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);