import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/providers/services/location/location.service';
// import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _locationService:LocationService) { }

  // map: google.maps.Map;

  items: Array<string> = []

  ngOnInit(): void {
    this._locationService.getAllLocations()
  }
}
