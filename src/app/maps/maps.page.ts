import { ElementRef, ViewChild, Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, CameraPosition, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';
import { mapStyle } from './mapStyle';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss'],
})
export class MapsPage {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController) { }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    const element = this.mapElement.nativeElement;
    const loc: LatLng = new LatLng(40.7128, -74.0059);
    let style = [];

    // Change Style to night between 7pm to 5am
    if (this.isNight()) {
        style = mapStyle;
    }

    this.map = GoogleMaps.create(element, { styles: style });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        this.moveCamera(loc);
    });
  }

  moveCamera(loc: LatLng) {
      const options: CameraPosition<any> = {
        target: loc,
        zoom: 15,
        tilt: 10
      };
      this.map.moveCamera(options);
  }

  isNight() {
    // Returns true if the time is between
    // 7pm to 5am
    const time = new Date().getHours();
    return (time > 5 && time < 19) ? false : true;
  }

  // ======================== SLIDES ====================

  slidePage(event: Event) {
  }
}
