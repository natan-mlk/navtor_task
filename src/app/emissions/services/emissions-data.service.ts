import { Injectable } from '@angular/core';
import { RestService } from 'src/app/common/services/rest.service';
import { Observable } from 'rxjs';  
import { EmissionDataModel } from '../models/emissions.model';  

@Injectable({
  providedIn: 'root'
})
export class EmissionsDataService {
  constructor(
    private restService: RestService,
  ) { }

  getEmissionsCollection(): Observable<EmissionDataModel[]> {
    return this.restService.getRestData('emissions.json');
  }
}
