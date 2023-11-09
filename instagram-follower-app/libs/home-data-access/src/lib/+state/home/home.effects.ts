import { inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import * as HomeActions from './home.actions';
import * as HomeSelectors from './home.selectors';
import { HomeDataAccessRestService } from '../../home-data-access-rest.service';
import { endLoader, LoaderFacade } from 'loader-data-access';
import { select, Store } from '@ngrx/store';

@Injectable()
export class HomeEffects {
  private actions$ = inject(Actions);
  private homeDataAccessRestService = inject(HomeDataAccessRestService);
  private loaderFacade = inject(LoaderFacade);
  private store = inject(Store);

  initImageProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initImageProfile),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getImageProfile(action.link).pipe(
          map((imageProfile) => {
            const createURL = URL.createObjectURL(imageProfile);
            return HomeActions.loadImageProfile({
              imageProfile: createURL,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initUsersImageProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUsersImageProfile),
      concatLatestFrom(() =>
        this.store.pipe(select(HomeSelectors.getUsersImageProfiles))
      ),
      switchMap(([action, usersImageProfile]) => {
        const obsRest: Observable<Blob>[] = [];
        const newUsersLink: { username: string; link: string }[] = [];
        action.usersLinks.forEach((user) => {
          if (!Object.keys(usersImageProfile).includes(user.username)) {
            obsRest.push(
              this.homeDataAccessRestService.getImageProfile(user.link)
            );
            newUsersLink.push(user);
          }
        });
        return forkJoin(obsRest).pipe(
          map((imagesProfile) => {
            const createURLs: Record<string, string> = {};
            imagesProfile.forEach(
              (imageProfile, index) =>
                (createURLs[newUsersLink[index].username] =
                  URL.createObjectURL(imageProfile))
            );
            return HomeActions.loadUsersImageProfile({
              imagesProfile: createURLs,
            });
          })
        );
      })
    )
  );

  initProfileInfos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initProfileInfos),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService
          .getProfileInfos(action.username)
          .pipe(
            map((infos) =>
              HomeActions.loadProfileInfos({
                infos,
              })
            ),
            endLoader(this.loaderFacade)
          );
      })
    )
  );

  followUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HomeActions.followUser),
        switchMap((action) => {
          this.loaderFacade.startLoader();
          return this.homeDataAccessRestService
            .followUser(action.pk)
            .pipe(endLoader(this.loaderFacade));
        })
      ),
    { dispatch: false }
  );

  unfollowUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HomeActions.unfollowUser),
        switchMap((action) => {
          this.loaderFacade.startLoader();
          return this.homeDataAccessRestService
            .unfollowUser(action.pk)
            .pipe(endLoader(this.loaderFacade));
        })
      ),
    { dispatch: false }
  );

  initSearchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initSearchUsers),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.searchUsers(action.value).pipe(
          map((userObj) => {
            const usersLinks = userObj.users.map((user) => ({
              username: user.username,
              link: user.profile_pic_url,
            }));
            this.store.dispatch(
              HomeActions.initUsersImageProfile({ usersLinks })
            );
            return HomeActions.loadSearchUsers({
              userObj,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUser),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getUser(action.pk).pipe(
          map((user) =>
            HomeActions.loadUser({
              user,
            })
          ),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initStories),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getStories(action.pk).pipe(
          map((stories) =>
            HomeActions.loadStories({
              stories,
            })
          ),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initUserImageProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUserImageProfile),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getImageProfile(action.link).pipe(
          map((userImageProfile) => {
            const createURL = URL.createObjectURL(userImageProfile);
            return HomeActions.loadUserImageProfile({
              userImageProfile: createURL,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initUserInfos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUserInfos),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getUserInfos(action.request).pipe(
          map((accounts) => {
            const usersLinks = accounts.map((account) => ({
              link: account.profile_pic_url,
              username: account.username,
            }));
            this.store.dispatch(
              HomeActions.initUsersImageProfile({ usersLinks })
            );
            return HomeActions.loadUserInfos({
              scroll: action.scroll,
              accounts,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  resetUserInfos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HomeActions.resetUserInfos),
        switchMap(() => this.homeDataAccessRestService.resetUserInfos())
      ),
    { dispatch: false }
  );

  initUserPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUserPost),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        return this.homeDataAccessRestService.getUserPost(action.pk).pipe(
          map((post) => {
            const userPost = post.map((p) => ({
              link: p.image_versions2.candidates[0].url,
              id: p.pk,
            }));
            this.store.dispatch(HomeActions.initUserPostImage({ userPost }));
            return HomeActions.loadUserPost({
              post,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  initUserPostImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initUserPostImage),
      switchMap((action) => {
        this.loaderFacade.startLoader();
        const obsRest: Observable<Blob>[] = [];
        action.userPost.forEach((post) =>
          obsRest.push(
            this.homeDataAccessRestService.getImageProfile(post.link)
          )
        );
        return forkJoin(obsRest).pipe(
          map((postUser) => {
            const createURLs: Record<string, string> = {};
            postUser.forEach(
              (post, index) =>
                (createURLs[action.userPost[index].id] =
                  URL.createObjectURL(post))
            );
            return HomeActions.loadUserPostImage({
              images: createURLs,
            });
          }),
          endLoader(this.loaderFacade)
        );
      })
    )
  );
}
