import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmissionsDataService } from '../../services/emissions-data.service';
import { EmissionDataModel, EmissionsCollectionModel } from '../../models/emissions.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit, OnDestroy {

  emissionsServerData: any;
  emissionsData: EmissionDataModel | undefined = undefined;
  formGroup = new FormGroup({
    chosenId: new FormControl(),
  })

  private formValueSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private emissionsService: EmissionsDataService
  ) { }

  ngOnInit(): void {
    this.getVesselsData();
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
  }

  private getVesselsData(): void {
    this.emissionsService.getEmissionsCollection().subscribe({
      next: (emissions: EmissionsCollectionModel[])=> {
        console.log('Emissions server data', emissions);
        this.emissionsServerData = emissions;
        this.setInitialFormValue();
        const chosenEmissionsCollection: EmissionsCollectionModel | undefined = emissions.find(
            (item: EmissionsCollectionModel) => item.id === this.formGroup.value.chosenId
          );
        this.emissionsData = chosenEmissionsCollection?.timeSeries;
        this.setFormWatcher();
      }
    })
  }

  private setInitialFormValue(): void {
    this.formGroup.setValue({chosenId: this.emissionsServerData[0].id})
  }

  private setFormWatcher(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(
      value => {
        const chosenEmissionsCollection: EmissionsCollectionModel | undefined = this.emissionsServerData.find(
            (item: EmissionsCollectionModel) => item.id === this.formGroup.value.chosenId
          );
        this.emissionsData = chosenEmissionsCollection?.timeSeries;
      }
    )
  }
}
