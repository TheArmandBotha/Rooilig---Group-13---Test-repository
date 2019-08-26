import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'My first AGM project';
  lat = -26.72104325806566;
  lng = 27.09517283257685;
  locationChosen = false;

  constructor() {}

  onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}
