import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <html>
    <head>
    </head>
    <body>
      <!-- Uses a transparent header that draws on top of the layout's background -->
        <h1>Hello </h1>
    </body>
  </html>`,
  styleUrls: ['../styles/main.scss'],
  encapsulation: ViewEncapsulation.None,
  // providers: []
})
export class AppComponent {

  constructor() {

  }

}
