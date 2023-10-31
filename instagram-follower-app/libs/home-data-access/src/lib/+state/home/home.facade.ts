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
  infos$ = this.store.pipe(select(HomeSelectors.getProfileInfos));
  followedNotReturn$ = this.store.pipe(
    select(HomeSelectors.getUserFollowedButNotReturn)
  );
  usersIDontFollow$ = this.store.pipe(
    select(HomeSelectors.getUsersIDontFollow)
  );
  imagesProfiles$ = this.store.pipe(
    select(HomeSelectors.getUsersImageProfiles)
  );
  usersImageProfileLoading$ = this.store.pipe(
    select(HomeSelectors.getUsersImageProfilesLoading)
  );
  usersFollowerViceVersa$ = this.store.pipe(
    select(HomeSelectors.getUsersFollowViceVersa)
  );
  usersSearched$ = this.store.pipe(select(HomeSelectors.getUsersSearched));
  user$ = this.store.pipe(select(HomeSelectors.getUser));
  stories$ = this.store.pipe(select(HomeSelectors.getStories));
  userImageProfile$ = this.store.pipe(
    select(HomeSelectors.getUserImageProfile)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  initImageProfile(link: string) {
    this.store.dispatch(HomeActions.initImageProfile({ link }));
  }

  initProfileInfos(username: string) {
    this.store.dispatch(HomeActions.initProfileInfos({ username }));
  }

  initUsersImagesProfile(usersLinks: { username: string; link: string }[]) {
    this.store.dispatch(HomeActions.initUsersImageProfile({ usersLinks }));
  }

  followUser(pk: number) {
    this.store.dispatch(HomeActions.followUser({ pk }));
  }

  unfollowUser(pk: number) {
    this.store.dispatch(HomeActions.unfollowUser({ pk }));
  }

  searchUsers(value: string) {
    this.store.dispatch(HomeActions.initSearchUsers({ value }));
  }

  initUser(pk: number) {
    this.store.dispatch(HomeActions.initUser({ pk }));
  }

  initStories(pk: number) {
    this.store.dispatch(HomeActions.initStories({ pk }));
  }

  initUserImageProfile(link: string) {
    this.store.dispatch(HomeActions.initUserImageProfile({ link }));
  }

  resetSearchedUsers() {
    this.store.dispatch(HomeActions.resetSearchedUsers());
  }

  resetUser() {
    this.store.dispatch(HomeActions.resetUser());
  }
}
