import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { LocationService } from '../../providers/services/location/location.service';
import { MapService } from '../../providers/services/map/map.service';
import { Location } from "../../models/location";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private _locationService:LocationService,
    private _mapService:MapService
  ) 
  { }

  ngOnInit(): void {
      this._mapService.createMap(document.getElementById("map") as HTMLElement);

      setTimeout(() => {
        this.placeMarkers()
      }, 700)
  }

  placeMarkers() {
    let markers: google.maps.Marker[] = [];
    
    (this._locationService.allLocations as Location[]).map(x => {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(x.latitude, x.longitude),
        map: this._mapService.map
      });

      marker.addListener("click", () => {
        console.log('clicked', marker)
      })

      markers.push(marker);
    })
    
    this._mapService.addRangeMarkers(markers);
  }

}
