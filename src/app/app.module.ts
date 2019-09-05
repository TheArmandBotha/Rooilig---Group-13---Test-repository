import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HomePag } from './app.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { HammertimeDirective } from './hammertime.directive';

@NgModule({
  declarations: [
    AppComponent,
    HammerCardComponent,
    HammertimeDirective,
  ],
  entryComponents: [],
  imports: [
  BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
