import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as LoginActions from './login.actions';

@Injectable()
export class LoginFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  login() {
    this.store.dispatch(
      LoginActions.login({ loginData: { password: '', username: '' } })
    );
  }
}
