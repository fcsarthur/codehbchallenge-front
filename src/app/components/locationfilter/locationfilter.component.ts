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

      this._mapService.selectedOrigin = place.geometry.location;
      if(!this._mapService.originMarker) {
        this._mapService.originMarker = this._mapService.pinMarker(this._mapService.selectedOrigin, './assets/icons/custom-pin-transp.png');
        // this.originMarker = this._mapService.pinMarker(this._mapService.selectedOrigin, "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png");
      }
      else {
        this._mapService.originMarker.setPosition(place.geometry.location);
        this._mapService.originMarker.setVisible(true);
      }

      this._mapService.createRoute();
    });
  }

  clearFilters() {
    if(this._mapService.originMarker) {
      this._mapService.originMarker.setVisible(false);
      this._mapService.selectedOrigin = undefined;
      this._mapService.clearRoute();
      (document.getElementById("locationfilter") as HTMLInputElement).value = "";
    }
  }

}
