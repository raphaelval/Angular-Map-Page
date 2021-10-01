import { Component, OnInit } from '@angular/core';
import { Result } from './../../models/result'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: Result[] = [];

  constructor() { }

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

}
