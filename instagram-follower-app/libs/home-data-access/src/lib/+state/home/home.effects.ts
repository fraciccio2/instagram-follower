import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, EMPTY } from 'rxjs';
import * as HomeActions from './home.actions';
import * as HomeFeature from './home.reducer';
import { HomeDataAccessRestService } from '../../home-data-access-rest.service';

@Injectable()
export class HomeEffects {
  private actions$ = inject(Actions);
  private homeDataAccessRestService = inject(HomeDataAccessRestService);

  initImageProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.initImageProfile),
      switchMap((action) => {
        return this.homeDataAccessRestService.getImageProfile(action.link).pipe(
          map((imageProfile) => {
            const createURL = URL.createObjectURL(imageProfile);
            return HomeActions.loadImageProfile({
              imageProfile: createURL,
            });
          })
        );
      })
    )
  );
}
