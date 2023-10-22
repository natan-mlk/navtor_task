import { Injectable } from '@angular/core';
import { RestService } from 'src/app/common/services/rest.service';
import { Observable } from 'rxjs';  
import { EmissionsCollectionModel } from '../models/emissions.model';  

@Injectable({
  providedIn: 'root'
})
export class EmissionsDataService {
  constructor(
    private restService: RestService,
  ) { }

  getEmissionsCollection(): Observable<EmissionsCollectionModel[]> {
    return this.restService.getRestData('emissions.json');
  }
}
