import { CountryActions, CountryActionsConstants } from './../actions/country-actions';
import { CountryInfo } from './../app-model';
import {Action } from '@ngrx/store';

const initialState:CountryInfo[]=[];


export function countryReducer(state:CountryInfo[]=[], action: Action){

switch (action.type) {
  case CountryActionsConstants.LOAD_COUNTRY:
return state;

case CountryActionsConstants.ADD_COUNTRY:
return [...state, ...action.payload];

  default: return state;
}

}
