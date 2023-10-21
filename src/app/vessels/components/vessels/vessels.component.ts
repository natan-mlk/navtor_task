import { Component, OnInit } from '@angular/core';
import { VesselsDataService } from '../../services/vessels-data.service';
import { VesselDataModel } from '../../models/vessels.model';

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent implements OnInit {

  columns: any[] = [];
  dataSource: VesselDataModel[] = [];
  displayedColumns: any;

  /** TODO VesselDataModel as nicknames? */

  constructor(
    private vesselsService: VesselsDataService
  ) { }

  ngOnInit(): void {
    this.getVesselsData();
    this.configureColumnsInTable();
  }


  private getVesselsData(): void {
    this.vesselsService.getVesselsCollection().subscribe({
      next: (vessels)=> {
        console.log(vessels);
        this.fillTableWithData(vessels);
      }
    })
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

  private fillTableWithData(vessels: any): void {
    this.dataSource = vessels;
  }
}
