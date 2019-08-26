import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleMaps } from '@ionic-native/google-maps';


import { HomePage } from './home.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMaps,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTBMNAz5_IhGsemzmMmNnBwWB9nOoMUO4'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
