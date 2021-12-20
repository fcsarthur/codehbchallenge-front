import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { environment } from "../../../environments/environment";
import { LocationService } from '../../providers/services/location/location.service';
import { Location } from "../../models/location";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _locationService:LocationService) { }

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: environment.mapsAPIKey
    })

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -30.063885, lng: -51.118714 },
        zoom: 12
      })

      this.placeMarkers()
    })
  }

  placeMarkers() {
    (this._locationService.allLocations as Location[]).map(x => {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(x.latitude, x.longitude),
        map: this.map
      });

      marker.addListener("click", () => {
        console.log('clicked', marker)
      })

      this.markers.push(marker);
    })
  }

}
