import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as LoginActions from './login.actions';
import { LoginDataAccessRestService } from '../../login-data-access-rest.service';
import { endLoader, LoaderFacade } from 'loader-data-access';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects implements OnInitEffects {
  private actions$ = inject(Actions);
  private loginDataAccessRestService = inject(LoginDataAccessRestService);
  private loaderFacade = inject(LoaderFacade);
  private store = inject(Store);
  private router = inject(Router);

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
                  localStorage.setItem('auth', JSON.stringify(loggedUser));
                  this.store.dispatch(
                    LoginActions.setLoggedUserStore({ loggedUser })
                  );
                  this.router
                    .navigate(['/home'])
                    .catch((e) => console.error(e));
                }
              }),
              endLoader(this.loaderFacade)
            );
        })
      ),
    { dispatch: false }
  );

  setLoggedUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.setLoggedUser),
        map(() => {
          const loggedUser = localStorage.getItem('auth');
          if (loggedUser) {
            const loggedUserObj = JSON.parse(loggedUser);
            this.store.dispatch(
              LoginActions.setLoggedUserStore({ loggedUser: loggedUserObj })
            );
          }
        })
      ),
    { dispatch: false }
  );

  logoutStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logoutStorage),
        map(() => {
          localStorage.removeItem('auth');
          this.router.navigate(['login']).catch((e) => console.error(e));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logout),
      switchMap(() => {
        this.loaderFacade.startLoader();
        return this.loginDataAccessRestService.logout().pipe(
          map(() => LoginActions.logoutStorage()),
          endLoader(this.loaderFacade)
        );
      })
    )
  );

  ngrxOnInitEffects(): Action {
    return LoginActions.setLoggedUser();
  }
}
