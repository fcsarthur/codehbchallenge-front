import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map?: google.maps.Map;
  markers: google.maps.Marker[] = [];
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;

  originMarker!: google.maps.Marker;
  selectedOrigin?: google.maps.LatLng;
  
  destinationMarker!: google.maps.Marker;
  selectedDestination?: google.maps.LatLng;

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

    return newMarker;
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

  createRoute() {
    if(this.selectedOrigin && this.selectedDestination) {
      let request = {
        origin: this.selectedOrigin,
        destination: this.selectedDestination,
        travelMode: google.maps.TravelMode.DRIVING
      };
  
      this.directionsService.route(request, (response, status) => {
        this.directionsRenderer.setOptions({
          suppressPolylines: false,
          map: this.map
        });
  
        if (status == google.maps.DirectionsStatus.OK) {
          this.handleMarkers(false);
          this.directionsRenderer.setDirections(response);
        }
        else {
          this.handleMarkers(true);
        }
      })
    }
  }
  
  clearRoute() {
    this.directionsRenderer.set('directions', null);
    this.handleMarkers(true);
    this.map?.setZoom(12);
    this.map?.setCenter(new google.maps.LatLng(-30.063885, -51.118714));
  }

  private handleMarkers(isVisible : boolean) {
    this.markers.map(x => {
      x.setVisible(isVisible);
    })
  }
}
