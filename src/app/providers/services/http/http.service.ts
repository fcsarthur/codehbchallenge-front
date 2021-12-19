import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface DataResponse<T> {
  Data: T
  StatusCode: string
  Notifications: string[]
  Exception: string
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  get(host: String, endpoint: String, params?: any, headers?: any): Observable<any> {
    return this.http.get(`${host}/${endpoint}`, { params: params, headers });
  }
}
