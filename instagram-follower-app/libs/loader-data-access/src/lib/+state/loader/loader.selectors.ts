import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOADER_FEATURE_KEY, LoaderState } from './loader.reducer';

// Lookup the 'Loader' feature state managed by NgRx
export const selectLoaderState =
  createFeatureSelector<LoaderState>(LOADER_FEATURE_KEY);

export const getLoaderLoading = createSelector(
  selectLoaderState,
  (state: LoaderState) => state.loading
);
