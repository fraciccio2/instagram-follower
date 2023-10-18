import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as LoginActions from './login.actions';
import * as LoginSelectors from './login.selectors';

@Injectable()
export class LoginFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loggedUser$ = this.store.pipe(select(LoginSelectors.getLoggedUser));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  login(username: string, password: string) {
    this.store.dispatch(LoginActions.login({ username, password }));
  }

  logout() {
    this.store.dispatch(LoginActions.logout());
  }
}
