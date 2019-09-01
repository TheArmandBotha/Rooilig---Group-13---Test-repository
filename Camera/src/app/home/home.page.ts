import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) {}

  async takePhoto() {
    const{Camera } = Plugins;

    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });

    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.base64String,
      );
  }
}
