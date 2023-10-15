import { Action, createReducer } from '@ngrx/store';

export const LOGIN_FEATURE_KEY = 'login';

export interface LoginState {}

export interface LoginPartialState {
  readonly [LOGIN_FEATURE_KEY]: LoginState;
}

export const initialLoginState: LoginState = {};

const reducer = createReducer(initialLoginState);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return reducer(state, action);
}
