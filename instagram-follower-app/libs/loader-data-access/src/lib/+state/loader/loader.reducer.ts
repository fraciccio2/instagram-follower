import { Action, createReducer, on } from '@ngrx/store';

import * as LoaderActions from './loader.actions';

export const LOADER_FEATURE_KEY = 'loader';

export interface LoaderState {
  loading: boolean;
}

export interface LoaderPartialState {
  readonly [LOADER_FEATURE_KEY]: LoaderState;
}

export const initialLoaderState: LoaderState = {
  // set initial required properties
  loading: false,
};

const reducer = createReducer(
  initialLoaderState,
  on(LoaderActions.startLoader, (state) => ({ ...state, loading: true })),
  on(LoaderActions.stopLoader, (state) => ({
    ...state,
    loading: false,
  }))
);

export function loaderReducer(state: LoaderState | undefined, action: Action) {
  return reducer(state, action);
}
