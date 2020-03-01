import { Component, OnInit, OnDestroy } from '@angular/core';
import axios from 'axios';

export interface City {
  id: number;
  name: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  airData = [];
  constructor() {
    axios.get('http://localhost:4000/')
      .then(response => {
        // handle success
        console.log(response.data);
        this.airData = response.data;
        this.ngOnInit();
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  ngOnInit() { }
  ngOnDestroy() {
  }
}
