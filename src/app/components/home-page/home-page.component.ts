import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
  title = 'Air Quality Data';
  airData = [{"_id":"5e5531b21c9d4400006eff28","name":"Denmark","rank":1,"flag":"dk","airIndex":878,"population":32343},{"_id":"5e5531b21c9d4400006eff26","name":"Australia","rank":2,"flag":"au","airIndex":628,"population":3232243},{"_id":"5e5531b21c9d4400006eff25","name":"India","rank":3,"flag":"in","airIndex":80,"population":323233243},{"_id":"5e5531b21c9d4400006eff27","name":"Germany","rank":4,"flag":"de","airIndex":50,"population":33243}];

  constructor(
  ) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit() { }

  ngOnDestroy() {
  }
}
