import { createAction, props } from '@ngrx/store';
import {
  AccountUsersModel,
  UserRepositoryInfoResponseUser,
  UserRepositorySearchResponseRootObject,
} from 'home-util';

export const initImageProfile = createAction(
  '[Home/API] Init Image Profile',
  props<{ link: string }>()
);

export const loadImageProfile = createAction(
  '[Home/API] Load Image Profile',
  props<{ imageProfile: string }>()
);

export const initProfileInfos = createAction(
  '[Home/API] Init Profile Infos',
  props<{ username: string }>()
);

export const loadProfileInfos = createAction(
  '[Home/API] Load Profile Infos',
  props<{ infos: AccountUsersModel }>()
);

export const initUsersImageProfile = createAction(
  '[Home/API] Init Users Image Profile',
  props<{ usersLinks: { username: string; link: string }[] }>()
);

export const loadUsersImageProfile = createAction(
  '[Home/API] Load Users Image Profile',
  props<{ imagesProfile: Record<string, string> }>()
);

export const followUser = createAction(
  '[Home/API] Follow User',
  props<{ pk: number }>()
);

export const unfollowUser = createAction(
  '[Home/API] Unfollow User',
  props<{ pk: number }>()
);

export const initSearchUsers = createAction(
  '[Home/API] Init Search Users',
  props<{ value: string }>()
);

export const loadSearchUsers = createAction(
  '[Home/API] Load Search Users',
  props<{ userObj: UserRepositorySearchResponseRootObject }>()
);

export const initUser = createAction(
  '[Home/API] Init User',
  props<{ pk: number }>()
);

export const loadUser = createAction(
  '[Home/API] Load Users',
  props<{ user: UserRepositoryInfoResponseUser }>()
);
