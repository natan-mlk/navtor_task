import { Component, OnInit } from '@angular/core';
import { VesselsDataService } from '../../services/vessels-data.service';

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent implements OnInit {

  constructor(
    private vesselsService: VesselsDataService
  ) { }

  ngOnInit(): void {
    this.getVesselsData();
  }


  private getVesselsData(): void {
    this.vesselsService.getVesselsCollection().subscribe({
      next: (vessels)=> {
        console.log(vessels);
      }
    })
  }
}
