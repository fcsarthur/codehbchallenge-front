import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];

  constructor() { }

  createMap(htmlElement: HTMLElement){
    this.map = new google.maps.Map(htmlElement, {
      center: new google.maps.LatLng(-30.063885, -51.118714),
      zoom: 12,
      mapTypeControl: false
    })
  }

  addRangeMarkers(markersArr: google.maps.Marker[]) {
    this.markers = markersArr;
  }
}
