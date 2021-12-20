import { Component, OnInit } from '@angular/core';
import { MapService } from "../../providers/services/map/map.service";

@Component({
  selector: 'app-locationfilter',
  templateUrl: './locationfilter.component.html',
  styleUrls: ['./locationfilter.component.scss']
})
export class LocationfilterComponent implements OnInit {

  constructor(
    private _mapService:MapService
  ) { }

  ngOnInit(): void {
    const input = document.getElementById("locationfilter") as HTMLInputElement;
    
    const options = {
      componentRestrictions: { country: "br" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      types: ["establishment"],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      
      if (!place.geometry || !place.geometry.location) {
        ("No details available for input: '" + place.name + "'");
        return;
      }

      console.log("selected place", place);
    });

    setTimeout(() => {
      let origin = new google.maps.LatLng(-30.044100000000000, -51.219400000000000);
      this._mapService.pinMarker(origin, "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png")
  
      let destination = new google.maps.LatLng(-30.005100000000000, -51.201300000000000);
      this._mapService.pinMarker(destination, "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png")
      
      this._mapService.createRoute(origin, destination);
  
      //call route
    }, 1000);

  }

}
