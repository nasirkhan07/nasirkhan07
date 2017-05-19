import { CountryInfo } from './../app-model';

import {Action} from '@ngrx/store';

export const CountryActionsConstants = {
LOAD_COUNTRY: '[country] Load',
ADD_COUNTRY: '[country] Add',
};

export class CountryLoadAction implements Action{
readonly type= CountryActionsConstants.LOAD_COUNTRY;

constructor(public payload?: string) {
}
}


export class CountryAddAction implements Action{
readonly type= CountryActionsConstants.ADD_COUNTRY;

constructor(public payload?: CountryInfo[]) {
}
}

export const CountryActions = CountryLoadAction
                              || CountryAddAction;
