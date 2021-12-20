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

      const contentString = 
        `<div>
          <p><strong>${x.nome}</strong></p>
          <p>Dep. Adm.: ${x.dep_administrativa}</p>
          <p>Telefone: ${x.telefone}</p>
          <p>E-mail: ${x.email}</p>
          ${x.url_website ? (`<p>Site: <a href="${x.url_website}">${x.url_website}</a></p>`) : ''}
          <p>Endereço: ${x.logradouro}, ${x.numero}, ${x.bairro} - ${x.cep}</p>
        </div>
        <style>p{ margin: 0 }</style>`;
    
      const infoWindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map: this._mapService.map,
          shouldFocus: false,
        });
      });

      markers.push(marker);
    })
    
    this._mapService.addRangeMarkers(markers);
  }

}
