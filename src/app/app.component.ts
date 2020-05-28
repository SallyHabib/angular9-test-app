// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
// }

import { Component, OnInit } from '@angular/core';
// import { SpinnerService } from '../../services/spinner.service';
import { MyApiService } from './services/my-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // initial values
  name = 'Loading...';
  email = 'Loading...';
  firstname = 'Loading...';
  lastname = 'Loading...';

  constructor(
    private myapiService: MyApiService,
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    const req = this.myapiService.getmyProfile();
    req.subscribe( resp => {
      const {body} = resp;
      this.name = body['title']
    }, err => {
     console.log(err)
    });
  }
}

