import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as LoginActions from './login.actions';
import { LoginDataAccessRestService } from '../../login-data-access-rest.service';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginDataAccessRestService = inject(LoginDataAccessRestService);

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        switchMap(() => {
          return this.loginDataAccessRestService
            .login('francescogiacomazzo1', 'classe5')
            .pipe(
              map((loggedUser) => {
                debugger;
              })
            );
        })
      ),
    { dispatch: false }
  );
}
