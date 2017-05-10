import { WeatherComponent } from './weather/weather.component';
import { CountryComponent } from './country/country.component';
import { AppComponent } from './app.component';
// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo:"country",
        pathMatch:"prefix"
      },
       {
        path: 'country',
        component: CountryComponent
      },
       {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: "full"
      }
    ],
      {
        useHash: false
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
