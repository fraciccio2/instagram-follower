import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as LoaderActions from './loader.actions';
import * as LoaderSelectors from './loader.selectors';

@Injectable()
export class LoaderFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(LoaderSelectors.getLoaderLoading));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  startLoader() {
    this.store.dispatch(LoaderActions.startLoader());
  }

  stopLoader() {
    this.store.dispatch(LoaderActions.stopLoader());
  }
}
