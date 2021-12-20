import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;

  constructor() { 
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true
    });
  }

  createMap(htmlElement: HTMLElement){
    this.map = new google.maps.Map(htmlElement, {
      center: new google.maps.LatLng(-30.063885, -51.118714),
      zoom: 12,
      mapTypeControl: false
    })
  }

  pinMarker(coordinates: google.maps.LatLng, iconUrl?: string){
    var newMarker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
      icon: iconUrl
    });
  }

  // addMarker(marker: google.maps.Marker){
  //   this.markers.push(marker);
  // }

  // removeMarker(marker: google.maps.Marker) {
  //   const index = this.markers.indexOf(marker, 0);
  //   if (index > -1) {
  //     this.markers.splice(index, 1);
  //   }
  // }

  addRangeMarkers(markersArr: google.maps.Marker[]) {
    this.markers = markersArr;
  }

  createRoute(origin: google.maps.LatLng, destination: google.maps.LatLng) {
    let request = {
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (response, status) => {
      this.directionsRenderer.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(response);
      }
    })
  }
}
