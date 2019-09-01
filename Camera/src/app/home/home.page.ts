import { Component } from '@angular/core';
import { SafeResourceUrl} from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: SafeResourceUrl;
  constructor() {}

  async takePhoto(){
    const{Camera } =Plugins;

    const result = Camera.getPhoto();
  }
}
