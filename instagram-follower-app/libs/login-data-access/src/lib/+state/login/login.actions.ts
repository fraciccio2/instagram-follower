import { createAction, props } from '@ngrx/store';
import { AccountRepositoryLoginResponseLogged_in_user } from 'login-util';

export const login = createAction(
  '[Login/API] Login',
  props<{ username: string; password: string }>()
);

export const setLoggedUser = createAction('[Login/API] Set Logged User');

export const setLoggedUserStore = createAction(
  '[Login/API] Set Logged User Store',
  props<{ loggedUser: AccountRepositoryLoginResponseLogged_in_user }>()
);

export const logoutStorage = createAction('[Login/API] Logout Storage');

export const logout = createAction('[Login/API] Logout');
