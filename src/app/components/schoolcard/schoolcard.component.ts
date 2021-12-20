import { Component, Input, OnInit } from '@angular/core';
import { Location } from "../../models/location";
import { MapService } from "../../providers/services/map/map.service";

@Component({
  selector: 'app-schoolcard',
  templateUrl: './schoolcard.component.html',
  styleUrls: ['./schoolcard.component.scss']
})

export class SchoolcardComponent implements OnInit {

  @Input() location : Location | undefined;

  constructor(
    public _mapService: MapService
  ) { }

  ngOnInit(): void {

  }

  createRoute() {
    this._mapService.selectedDestination = new google.maps.LatLng(this.location?.latitude as number, this.location?.longitude as number);
    if(!this._mapService.destinationMarker) {
      this._mapService.destinationMarker = this._mapService.pinMarker(this._mapService.selectedDestination);
    }
    else {
      this._mapService.destinationMarker.setPosition(this._mapService.selectedDestination);
    }

    this._mapService.createRoute();
  }

}
