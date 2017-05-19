import { CountryActionsConstants } from './../actions/country-actions';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CountryInfo } from './../app-model';
import { Http } from '@angular/http';
import { Jsonp } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

   constructor(private jsonp: Jsonp, private http: Http,private store: Store<any>) { }
  countries: CountryInfo[];
  criteria: string = "Name";
  private searchTerm = new Subject<string>();
  ngOnInit() {
    this.store
    .dispatch({
      type:CountryActionsConstants.LOAD_COUNTRY
    });
    this.store.select('countries').subscribe((cntrs:CountryInfo[])=> {
      this.countries = cntrs;
      this.isSearching=false;
    })
    this.searchTerm.debounceTime(400).distinctUntilChanged().switchMap(val => this.search(val)).subscribe(val => {
      this.store
    .dispatch({
      type:CountryActionsConstants.ADD_COUNTRY,
      payload:val
    });
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
