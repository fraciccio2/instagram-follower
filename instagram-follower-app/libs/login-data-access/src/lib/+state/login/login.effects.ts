import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as LoginActions from './login.actions';
import { LoginDataAccessRestService } from '../../login-data-access-rest.service';
import { endLoader, LoaderFacade } from 'loader-data-access';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginDataAccessRestService = inject(LoginDataAccessRestService);
  private loaderFacade = inject(LoaderFacade);

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        switchMap((action) => {
          this.loaderFacade.startLoader();
          return this.loginDataAccessRestService
            .login(action.username, action.password)
            .pipe(
              map((loggedUser) => {
                if (loggedUser) {
                  console.log(loggedUser);
                }
              }),
              endLoader(this.loaderFacade)
            );
        })
      ),
    { dispatch: false }
  );
}
