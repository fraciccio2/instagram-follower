import { createAction, props } from '@ngrx/store';

export const initImageProfile = createAction(
  '[Home/API] Init Image Profile',
  props<{ link: string }>()
);

export const loadImageProfile = createAction(
  '[Home/API] Load Image Profile',
  props<{ imageProfile: string }>()
);
