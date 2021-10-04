import { Component, OnInit } from '@angular/core';
import { Result } from './../../models/result'
import { config } from 'src/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: Result[] = [];
  apiKey = config.MY_API_KEY;

  constructor() {

  }

  ngOnInit(): void {

    this.results = [{
      title: "Maggianos Italy",
      type: "Restaurant",
      address: "777 Glades Rd, Boca Raton, FL, 33433",
      reviews: "43"
    },
    {
      title: "Oliv Pit",
      type: "Restaurant",
      address: "3321 Palmetto Park Blvd, Boca Raton, FL, 33432",
      reviews: "76"
    }]
  }

  getLocation(): void {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords);
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: lat, lng: lon },
        zoom: 15,
        fullscreenControl: false,
        rotateControl: false,
        streetViewControl: false,
        scaleControl: false
      });
    });

  }

}
