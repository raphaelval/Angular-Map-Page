import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { config } from './../../../config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() {

  }


  ngOnInit(): void {
    let loader = new Loader({
      apiKey: config.MY_API_KEY
    })

    let lat: number;
    let lon: number;


    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords);
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    });




    loader.load().then(() => {

      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15,
        fullscreenControl: false,
        rotateControl: false,
        streetViewControl: false,
        scaleControl: false
      });
    });




  }

}
