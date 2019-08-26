import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, CameraPosition, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps) { }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    let loc: LatLng = new LatLng(40.7128, -74.0059);

    this.map = this.googleMaps.create(element, { styles: []});

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        this.moveCamera(loc);
    });
  }

  moveCamera(loc: LatLng){
      let options: CameraPosition<any> = {
        target: loc,
        zoom: 15,
        tilt: 10
      };
      this.map.moveCamera(options);
  }

}
