import { Component, OnInit } from '@angular/core';
export interface Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
 export class HomePageComponent implements OnInit {
  title = 'Air Quality Data';
  constructor() { }

  ngOnInit(): void {
  }

}
