import { createAction, props } from '@ngrx/store';
import { AccountUsersModel } from 'home-util';

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
