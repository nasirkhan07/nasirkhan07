import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CountryInfo } from './../app-model';
import { Http } from '@angular/http';
import { Jsonp } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

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


}
