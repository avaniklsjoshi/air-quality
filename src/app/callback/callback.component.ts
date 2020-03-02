import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: `
    <div class="spinner-border text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
