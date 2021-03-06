import {ActivatedRoute} from '@angular/router';
import { jqueryToken } from './../app-model';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';
import { Http } from '@angular/http';
import { WeatherInfo } from './weather-model';
import { Component, OnInit, Optional, Inject, Injectable ,ViewChild} from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @ViewChild("dt") dt:any;
  constructor(private http: Http, @Inject(jqueryToken) private $, private route: ActivatedRoute) {
    console.log($);

   }

  ngOnInit() {
this.route.queryParams.subscribe(val=>{
if(!!val){
if(val.hasOwnProperty("name")){
  this.getWeather(val.name);
}
}

});
  }

  ngAfterViewInit() {
    $(this.dt.nativeElement).datepicker();
  }

  weatherInfo: WeatherInfo;
  apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="
  apiKey = "b9feb11dd0284ae1a415f94d50777169";
  getWeather(value) {
    this.http.get(this.apiUrl + value + "&appid=" + this.apiKey)
    .catch(e=>{
   return Observable.create(obs=>{
       obs.next(null);
       obs.complete();
    })
    }).subscribe(res => {
      this.weatherInfo=(<any>res).json();
    })
    console.log(value);
  }

}
