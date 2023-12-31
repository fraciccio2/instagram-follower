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
}
