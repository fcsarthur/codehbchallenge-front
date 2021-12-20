import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../core/enums/endpoints';
import { HttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';
import { Location } from "../../../models/location";
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  allLocations: Location[] = [];

  constructor(
    private _http: HttpService
  ) { }

  getAllLocations() {
    return this._http
      .get(`${environment.apiURL}`, `${ENDPOINTS.LIST_LOCATIONS}`)
      .subscribe((res) => {
        if(res.data != null) {
          this.allLocations = res.data;
        }
      });
  }
}
