import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_FEATURE_KEY, HomeState } from './home.reducer';

// Lookup the 'Home' feature state managed by NgRx
export const selectHomeState =
  createFeatureSelector<HomeState>(HOME_FEATURE_KEY);

export const getImageProfile = createSelector(
  selectHomeState,
  (state: HomeState) => state.imageProfile
);
