import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmissionDataModel, EmissionsCollectionModel } from '../../models/emissions.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectEmissionsData } from '../../state/emissions.selectors';


@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit, OnDestroy {

  private emissionsData$ = this.store.select(selectEmissionsData);
  private storeSubsciption: Subscription = Subscription.EMPTY;

  emissionsServerData: any;
  emissionsData: EmissionDataModel | undefined = undefined;
  formGroup = new FormGroup({
    chosenId: new FormControl(),
  })

  private formValueSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.storeSubsciption = this.emissionsData$
      .subscribe({
        next: (emissions: EmissionsCollectionModel[] | undefined) => {
          this.emissionsServerData = emissions;
          this.setInitialFormValue();
          const chosenEmissionsCollection: EmissionsCollectionModel | undefined = emissions?.find(
            (item: EmissionsCollectionModel) => item.id === this.formGroup.value.chosenId
          );
        this.emissionsData = chosenEmissionsCollection?.timeSeries;
        this.setFormWatcher();
        }
      })
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
    this.storeSubsciption.unsubscribe();
  }

  private setInitialFormValue(): void {
    if(this.emissionsServerData?.length){
      this.formGroup.setValue({chosenId: this.emissionsServerData[0].id})
    }
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
