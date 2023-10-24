import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmissionsState } from './emissions.reducer';
import { selectVesselsState } from 'src/app/vessels/state/vessels.selectors';
import { EmissionsCollectionModel } from '../models/emissions.model';

export const selectEmissionsState = createFeatureSelector<EmissionsState>('emissions');


export const selectEmissionsLoading = createSelector(
  selectEmissionsState,
  (state) => state.loadingEmissions
);

export const selectEmissionsError = createSelector(
  selectEmissionsState,
  (state) => state.errorEmissions
);

export const selectEmissionsData = createSelector(
  selectVesselsState,
  selectEmissionsState,
  (stateVessels, stateEmissions) => {

    const emissionsArray: EmissionsCollectionModel[] = [];
    /** due to error "ERROR TypeError: Cannot define property name, object is not extensible" and lack of time, 
     * I will not return modified stateEmissions but as workaround - new Object  */
    stateEmissions.dataEmissions.map(
      (dataEmission: EmissionsCollectionModel) => {
        const selectedVessel = stateVessels.dataVessels.find(
          (vesselData)=> vesselData.id === dataEmission.id
        )
        if(selectedVessel) {
          emissionsArray.push(
            {
              id: selectedVessel.id,
              name: selectedVessel.name,
              timeSeries: dataEmission.timeSeries
            }
          )
        }
      }
    );
    return emissionsArray;
  }
);
