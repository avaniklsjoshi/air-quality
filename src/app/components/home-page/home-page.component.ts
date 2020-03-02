import { Component, OnInit, OnDestroy } from '@angular/core';
import axios from 'axios';
import {AUDIENCE, API_BASE_URL, AUTH_URL, CLIENT_ID, CLIENT_SECRET, GRANT_TYPE} from '../../../configs/config';

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
    axios({
      url: AUTH_URL,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        audience: AUDIENCE,
        grant_type: GRANT_TYPE
      }
    })
      .then(response => {
        axios({
          url: '/',
          method: 'get',
          baseURL: API_BASE_URL,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${response.data.access_token}`
          },
        })
          .then(res => {
            this.airData = res.data;
            this.ngOnInit();
          });
      })
      .catch(error => {
        console.log('###### Error: ', error);
      });
  }

  ngOnInit() { }
  ngOnDestroy() {
  }
}
