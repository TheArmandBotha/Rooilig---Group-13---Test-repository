import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: CameraOptions;
  constructor(private camera: Camera) {}
   async openCamera(){
    try{
      this.options  = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
    }
    catch(e){
      console.error(e);
    }
    this.camera.getPicture(this.options).then((ImageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + ImageData;
     }, (err) => {
      // Handle error
     });

  }
}
