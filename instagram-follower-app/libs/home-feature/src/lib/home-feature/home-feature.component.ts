import { Component, inject, OnInit } from '@angular/core';
import { LoginFacade } from 'login-data-access';
import { take } from 'rxjs';
import { HomeFacade } from 'home-data-access';
import { filterNullish } from 'ng';

@Component({
  selector: 'home-feature',
  template: `<home-ui
    [loggedUser]="loggedUser$ | async"
    [imageProfile]="imageProfile$ | async"
  ></home-ui>`,
  styles: [],
})
export class HomeFeatureComponent implements OnInit {
  private loginFacade = inject(LoginFacade);
  private homeFacade = inject(HomeFacade);

  loggedUser$ = this.loginFacade.loggedUser$;
  imageProfile$ = this.homeFacade.imageProfile$;

  ngOnInit() {
    this.loggedUser$.pipe(take(1), filterNullish()).subscribe((loggedUser) => {
      this.homeFacade.initImageProfile(loggedUser.profile_pic_url);
    });
  }
}
