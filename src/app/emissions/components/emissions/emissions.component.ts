import { Component, OnInit } from '@angular/core';
import { EmissionsDataService } from '../../services/emissions-data.service';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit {

  emissionsData: any;

  constructor(
    private emissionsService: EmissionsDataService
  ) { }

  ngOnInit(): void {
    this.getVesselsData();
  }

  private getVesselsData(): void {
    this.emissionsService.getEmissionsCollection().subscribe({
      next: (emissions)=> {
        this.emissionsData = emissions;
        console.log(emissions);
      }
    })
  }

}
