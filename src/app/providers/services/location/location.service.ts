import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../core/enums/endpoints';
import { HttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private _http: HttpService
  ) { }

  getAllLocations() {
    return this._http.get(`${environment.apiURL}`, `${ENDPOINTS.LIST_LOCATIONS}`);
  }
}
