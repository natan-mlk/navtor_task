import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmissionsState } from './emissions.reducer';

export const selectVesselsState = createFeatureSelector<EmissionsState>('emissions');

export const selectEmissionsData = createSelector(
  selectVesselsState,
  (state) => state.dataEmissions
);

export const selectEmissionsLoading = createSelector(
  selectVesselsState,
  (state) => state.loading
);

export const selectEmissionsError = createSelector(
  selectVesselsState,
  (state) => state.error
);
