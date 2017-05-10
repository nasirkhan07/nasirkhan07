import { CountryInfo } from './app-model';
import { Component } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private jsonp: Jsonp, private http: Http) { }
  countries: CountryInfo[];
  criteria: string = "Name";
  private searchTerm = new Subject<string>();
  ngOnInit() {
    this.searchTerm.debounceTime(400).distinctUntilChanged().switchMap(val => this.search(val)).subscribe(val => {
      this.countries = val
      this.isSearching=false;
    });

  }

  isSearching = false;

  search(val) {
    this.isSearching = true;
    switch (this.criteria) {
      case "Name":
        return this.http.get(`https://restcountries.eu/rest/v2/name/${val}`).map(item => item.json()).catch(err => {
          return Observable.create(v => {
            v.next(null);
          })
        });
      case "Region":
        return this.http.get(`https://restcountries.eu/rest/v2/region/${val}`).map(item => item.json()).catch(err => {
          return Observable.create(v => {
            v.next(null);
          })
        });
      case "Capital":
        return this.http.get(`https://restcountries.eu/rest/v2/capital/${val}`).map(item => item.json()).catch(err => {
          return Observable.create(v => {
            v.next(null);
          })
        });
      default:
        break;
    }



  }
  searchCountry(term) {
    console.log(term);

    this.searchTerm.next(term);
  }


   myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
}
