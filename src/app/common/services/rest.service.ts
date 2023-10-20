import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  private urlApiAddress: string = 'https://frontendteamfiles.blob.core.windows.net/exercises/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getRestData(location: string): Observable<any> {
    return this.httpClient.get(this.urlApiAddress + location);
  }
}
