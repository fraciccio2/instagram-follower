import { Action, createReducer, on } from '@ngrx/store';

import * as HomeActions from './home.actions';

export const HOME_FEATURE_KEY = 'home';

export interface HomeState {
  imageProfile?: string;
}

export interface HomePartialState {
  readonly [HOME_FEATURE_KEY]: HomeState;
}

export const initialHomeState: HomeState = {
  imageProfile: undefined,
};

const reducer = createReducer(
  initialHomeState,
  on(HomeActions.loadImageProfile, (state, { imageProfile }) => ({
    ...state,
    imageProfile,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return reducer(state, action);
}
