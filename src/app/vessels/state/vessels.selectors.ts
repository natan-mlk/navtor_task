import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VesselsState } from './vessels.reducer';

export const selectVesselsState = createFeatureSelector<VesselsState>('vessels');

export const selectVesselsData = createSelector(
  selectVesselsState,
  (state) => state.dataVessels
);

export const selectVesselsLoading = createSelector(
  selectVesselsState,
  (state) => state.loadingVessels
);

export const selectVesselsError = createSelector(
  selectVesselsState,
  (state) => state.errorVessels
);
