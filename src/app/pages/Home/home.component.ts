import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  map: google.maps.Map;

  items: Array<string> = [
    "aaaaaa",
    "bbbbbb",
    "cccccc",
    "dddddd",
    "eeeeee",
    "ffffff",
    "gggggg",
    "hhhhhh",
    "iiiiii",
    "jjjjjj",
    "kkkkkk",
    "llllll",
    "mmmmmm",
    "nnnnnn",
    "oooooo",
    "pppppp"
  ]

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBHwn1PiImZ4zUes7XwdAXIdMNBGfE2xqE'
    })

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -30.063885, lng: -51.118714 },
        zoom: 12
      })

      let markers = [
        { lat:-30.044100000000000, lng: -51.219400000000000 },
        { lat:-30.027800000000000, lng: -51.205000000000000 },
        { lat:-30.052100000000000, lng: -51.205300000000000 },
        { lat:-30.020600000000000, lng: -51.210200000000000 },
        { lat:-30.011000000000000, lng: -51.195800000000000 },
        { lat:-30.005100000000000, lng: -51.201300000000000 },
        { lat:-30.034600000000000, lng: -51.236300000000000 },
        { lat:-30.099400000000000, lng: -51.229300000000000 },
        { lat:-30.014600000000000, lng: -51.127600000000000 },
        { lat:-30.070000000000000, lng: -51.156200000000000 },
        { lat:-30.116500000000000, lng: -51.220500000000000 },
        { lat:-30.008000000000000, lng: -51.096800000000000 },
        { lat:-30.124900000000000, lng: -51.219400000000000 },
        { lat:-30.040799999999997, lng: -51.143100000000000 },
        { lat:-29.980300000000000, lng: -51.127100000000000 },
        { lat:-30.003500000000000, lng: -51.156200000000000 },
        { lat:-30.096700000000000, lng: -51.132700000000000 },
        { lat:-30.126100000000000, lng: -51.209400000000000 },
        { lat:-30.150400000000000, lng: -51.139500000000000 },
        { lat:-30.153600000000000, lng: -51.143300000000000 },
        { lat:-30.148700000000000, lng: -51.145200000000000 },
        { lat:-29.992800000000000, lng: -51.106700000000000 },
        { lat:-30.067900000000000, lng: -51.214500000000000 },
        { lat:-30.070800000000000, lng: -51.169800000000000 },
        { lat:-30.046400000000000, lng: -51.215700000000000 },
        { lat:-30.004800000000000, lng: -51.095000000000000 },
        { lat:-30.110700000000000, lng: -51.110600000000000 },
        { lat:-30.096100000000000, lng: -51.134500000000000 },
        { lat:-30.084479300000000, lng: -51.230152900000000 }
      ]
      
      markers.map(marker => {
        new google.maps.Marker({
          position: marker,
          map: this.map
        });
      })
    })
  }

}
