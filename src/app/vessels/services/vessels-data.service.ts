import { Injectable } from '@angular/core';
import { VesselDataModel } from '../models/vessels.model'
import { RestService } from 'src/app/common/services/rest.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VesselsDataService {

  constructor(
    private restService: RestService,
  ) { }

  getVesselsCollection(): Observable<VesselDataModel[]> {
    return this.restService.getRestData('vessels.json');
  }
}
