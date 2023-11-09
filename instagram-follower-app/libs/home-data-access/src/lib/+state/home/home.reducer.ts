import { Action, createReducer, on } from '@ngrx/store';

import * as HomeActions from './home.actions';
import {
  AccountFollowersFeed,
  AccountUsersModel,
  ReelsMediaFeedResponseItem,
  UserFeedResponseItemsItem,
  UserRepositoryInfoResponseUser,
  UserRepositorySearchResponseRootObject,
} from 'home-util';

export const HOME_FEATURE_KEY = 'home';

export interface HomeState {
  imageProfile?: string;
  imagesProfile: Record<string, string>;
  postImage: Record<string, string>;
  infos?: AccountUsersModel;
  loadingUsersImageProfile: boolean;
  userObj?: UserRepositorySearchResponseRootObject;
  user?: UserRepositoryInfoResponseUser;
  stories?: ReelsMediaFeedResponseItem[];
  userImageProfile?: string;
  userInfos?: AccountFollowersFeed[];
  post?: UserFeedResponseItemsItem[];
}

export interface HomePartialState {
  readonly [HOME_FEATURE_KEY]: HomeState;
}

export const initialHomeState: HomeState = {
  imageProfile: undefined,
  infos: undefined,
  imagesProfile: {},
  postImage: {},
  loadingUsersImageProfile: false,
  userImageProfile: undefined,
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
  })),
  on(HomeActions.loadSearchUsers, (state, { userObj }) => ({
    ...state,
    userObj,
  })),
  on(HomeActions.loadUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(HomeActions.loadStories, (state, { stories }) => ({
    ...state,
    stories,
  })),
  on(HomeActions.loadUserImageProfile, (state, { userImageProfile }) => ({
    ...state,
    userImageProfile,
  })),
  on(HomeActions.resetSearchedUsers, (state) => ({
    ...state,
    userObj: undefined,
  })),
  on(HomeActions.resetUser, (state) => ({
    ...state,
    user: undefined,
    post: undefined,
  })),
  on(HomeActions.resetUserInfos, (state) => ({
    ...state,
    userInfos: undefined,
  })),
  on(HomeActions.loadUserInfos, (state, { scroll, accounts }) => ({
    ...state,
    userInfos: scroll ? [...(state.userInfos ?? []), ...accounts] : accounts,
  })),
  on(HomeActions.loadUserPost, (state, { post }) => ({
    ...state,
    post,
  })),
  on(HomeActions.loadUserPostImage, (state, { images }) => ({
    ...state,
    postImage: images,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return reducer(state, action);
}
