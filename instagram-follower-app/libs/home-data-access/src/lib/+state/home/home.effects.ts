import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, EMPTY } from 'rxjs';
import * as HomeActions from './home.actions';
import * as HomeFeature from './home.reducer';
import { HomeDataAccessRestService } from '../../home-data-access-rest.service';
import { endLoader, LoaderFacade } from 'loader-data-access';

@Injectable()
export class HomeEffects {
  private actions$ = inject(Actions);
  private homeDataAccessRestService = inject(HomeDataAccessRestService);
  private loaderFacade = inject(LoaderFacade);

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
