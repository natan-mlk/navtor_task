import { Component, OnInit, OnDestroy } from '@angular/core';
import { VesselDataModel } from '../../models/vessels.model';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { loadVessels } from '../../state/vessels.actions';
import { selectVesselsData } from '../../state/vessels.selectors';


@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent implements OnInit, OnDestroy {

  private vesselsData$ = this.store.select(selectVesselsData);
  private storeSubsciption: Subscription = Subscription.EMPTY;

  columns: any[] = [];
  dataSource: VesselDataModel[] = [];
  displayedColumns: string[] = [];


  constructor(
    private store: Store
  ) { 
    this.store.dispatch(loadVessels());
  }

  ngOnInit(): void {
    this.configureColumnsInTable();
    this.storeSubsciption = this.vesselsData$
      .subscribe({
        next: (vessels: VesselDataModel[]) => {
          this.fillTableWithData(vessels);
        }
      })
  }

  ngOnDestroy(): void {
    this.storeSubsciption.unsubscribe();
  }

  private configureColumnsInTable(): void {
    this.columns = [
      {
        columnDef: 'name"',
        header: 'Name',
        cell: (element: VesselDataModel) => `${element.name}`,
      },
      {
        columnDef: 'mmsi',
        header: 'Mmsi',
        cell: (element: VesselDataModel) => `${element.mmsi}`,
      },
      {
        columnDef: 'imo',
        header: 'Imo',
        cell: (element: VesselDataModel) => `${element.imo}`,
      },
      {
        columnDef: 'companyName',
        header: 'Company Name',
        cell: (element: VesselDataModel) => `${element.companyName}`,
      },
      {
        columnDef: 'vesselType',
        header: 'Vessel Type',
        cell: (element: VesselDataModel) => `${element.vesselType}`,
      },
    ];
    this.displayedColumns = this.columns.map(column => column.columnDef);
  }

  private fillTableWithData(vessels: VesselDataModel[]): void {
    this.dataSource = vessels;
  }
}
