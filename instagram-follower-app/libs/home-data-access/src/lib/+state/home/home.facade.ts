import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as HomeActions from './home.actions';
import * as HomeSelectors from './home.selectors';

@Injectable()
export class HomeFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  imageProfile$ = this.store.pipe(select(HomeSelectors.getImageProfile));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  initImageProfile(link: string) {
    this.store.dispatch(HomeActions.initImageProfile({ link }));
  }
}
