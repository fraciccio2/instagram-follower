import { createAction, props } from '@ngrx/store';
import {
  AccountFollowersFeed,
  AccountInfoRequestModel,
  AccountUsersModel,
  ReelsMediaFeedResponseItem,
  UserFeedResponseItemsItem,
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

export const initStories = createAction(
  '[Home/API] Init Stories',
  props<{ pk: number }>()
);

export const loadStories = createAction(
  '[Home/API] Load Stories',
  props<{ stories: ReelsMediaFeedResponseItem[] }>()
);

export const initUserImageProfile = createAction(
  '[Home/API] Init User Image Profile',
  props<{ link: string }>()
);

export const loadUserImageProfile = createAction(
  '[Home/API] Load User Image Profile',
  props<{ userImageProfile: string }>()
);

export const resetSearchedUsers = createAction(
  '[Home/API] Reset Searched Users'
);

export const resetUser = createAction('[Home/API] Reset User');

export const resetUserInfos = createAction('[Home/API] Reset User Infos');

export const initUserInfos = createAction(
  '[Home/API] Init User Infos',
  props<{ scroll: boolean; request: AccountInfoRequestModel }>()
);

export const loadUserInfos = createAction(
  '[Home/API] Load User Infos',
  props<{ scroll: boolean; accounts: AccountFollowersFeed[] }>()
);

export const initUserPost = createAction(
  '[Home/API] Init User Post',
  props<{ pk: number }>()
);

export const loadUserPost = createAction(
  '[Home/API] Load User Post',
  props<{ post: UserFeedResponseItemsItem[] }>()
);

export const initUserPostImage = createAction(
  '[Home/API] Init User Post Image',
  props<{ userPost: { link: string; id: string }[] }>()
);

export const loadUserPostImage = createAction(
  '[Home/API] Load User Post Image',
  props<{ images: Record<string, string> }>()
);
