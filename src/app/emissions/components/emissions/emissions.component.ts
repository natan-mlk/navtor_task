import { Component, OnInit } from '@angular/core';
import { EmissionsDataService } from '../../services/emissions-data.service';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit {

  constructor(
    private emissionsService: EmissionsDataService
  ) { }

  ngOnInit(): void {
    this.getVesselsData();
  }

  private getVesselsData(): void {
    this.emissionsService.getEmissionsCollection().subscribe({
      next: (emissions)=> {
        console.log(emissions);
      }
    })
  }
  
}
