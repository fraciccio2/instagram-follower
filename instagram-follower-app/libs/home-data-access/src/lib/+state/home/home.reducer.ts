import { Action, createReducer, on } from '@ngrx/store';

import * as HomeActions from './home.actions';
import { AccountUsersModel } from 'home-util';

export const HOME_FEATURE_KEY = 'home';

export interface HomeState {
  imageProfile?: string;
  imagesProfile: Record<string, string>;
  infos?: AccountUsersModel;
  loadingUsersImageProfile: boolean;
}

export interface HomePartialState {
  readonly [HOME_FEATURE_KEY]: HomeState;
}

export const initialHomeState: HomeState = {
  imageProfile: undefined,
  infos: undefined,
  imagesProfile: {},
  loadingUsersImageProfile: false,
};

const reducer = createReducer(
  initialHomeState,
  on(HomeActions.loadImageProfile, (state, { imageProfile }) => ({
    ...state,
    imageProfile,
  })),
  on(HomeActions.loadUsersImageProfile, (state, { imagesProfile }) => ({
    ...state,
    imagesProfile: { ...state.imagesProfile, ...imagesProfile },
    loadingUsersImageProfile: false,
  })),
  on(HomeActions.initUsersImageProfile, (state) => ({
    ...state,
    loadingUsersImageProfile: true,
  })),
  on(HomeActions.loadProfileInfos, (state, { infos }) => ({
    ...state,
    infos,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return reducer(state, action);
}
