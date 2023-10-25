import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HOME_FEATURE_KEY, HomeState} from './home.reducer';

// Lookup the 'Home' feature state managed by NgRx
export const selectHomeState =
  createFeatureSelector<HomeState>(HOME_FEATURE_KEY);

export const getImageProfile = createSelector(
  selectHomeState,
  (state: HomeState) => state.imageProfile
);

export const getProfileInfos = createSelector(
  selectHomeState,
  (state: HomeState) => state.infos
);

export const getUserFollowedButNotReturn = createSelector(
  selectHomeState,
  (state: HomeState) =>
    state.infos?.following.filter(
      (follow) =>
        !state.infos?.followers.find((fol) => fol.username === follow.username)
    )
);

export const getUsersIDontFollow = createSelector(
  selectHomeState,
  (state: HomeState) =>
    state.infos?.followers.filter(
      (follow) =>
        !state.infos?.following.find((fol) => fol.username === follow.username)
    )
);

export const getUsersFollowViceVersa = createSelector(
  selectHomeState,
  (state: HomeState) =>
    state.infos?.following.filter((follow) =>
      state.infos?.followers.find((fol) => fol.username === follow.username)
    )
);

export const getUsersImageProfiles = createSelector(
  selectHomeState,
  (state: HomeState) => state.imagesProfile
);

export const getUsersImageProfilesLoading = createSelector(
  selectHomeState,
  (state: HomeState) => state.loadingUsersImageProfile
);

export const getUsersSearched = createSelector(
  selectHomeState,
  (state: HomeState) => state.userObj
);

export const getUser = createSelector(
  selectHomeState,
  (state: HomeState) => state.user
);
