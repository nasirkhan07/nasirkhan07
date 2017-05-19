import { jqueryToken } from './app-model';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,OpaqueToken, InjectionToken} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CountryComponent } from './country/country.component';


const jquery: JQuery = window['$'] || window['jquery'];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CountryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule
  ],
  providers: [
    {
      provide: jqueryToken,
      useValue: jquery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
