import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { AccountRepositoryLoginResponseLogged_in_user } from 'login-util';

export const LOGIN_FEATURE_KEY = 'login';

export interface LoginState {
  loggedUser?: AccountRepositoryLoginResponseLogged_in_user;
}

export interface LoginPartialState {
  readonly [LOGIN_FEATURE_KEY]: LoginState;
}

export const initialLoginState: LoginState = {
  loggedUser: undefined,
};

const reducer = createReducer(
  initialLoginState,
  on(LoginActions.setLoggedUserStore, (state, { loggedUser }) => ({
    ...state,
    loggedUser,
  })),
  on(LoginActions.logout, (state) => initialLoginState)
);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return reducer(state, action);
}
