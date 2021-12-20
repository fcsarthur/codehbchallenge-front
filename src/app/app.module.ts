import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component'
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './pages/Home/home.component';

import { HttpService } from "../app/providers/services/http/http.service";
import { LocationService } from "../app/providers/services/location/location.service";
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
