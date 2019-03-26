import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessioninfoPageModule } from './sessioninfo/sessioninfo.module';
import { HttpClientModule} from '@angular/common/http'
import { LocalservicesService } from './localservices.service'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SessioninfoPageModule,
    ReactiveFormsModule  
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
