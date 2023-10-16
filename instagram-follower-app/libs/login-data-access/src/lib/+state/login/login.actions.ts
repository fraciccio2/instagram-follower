import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login/API] Load Login Success',
  props<{ username: string; password: string }>()
);
