import { Component, inject } from '@angular/core';
import { LoginFacade } from 'login-data-access';

@Component({
  selector: 'insta-login-feature',
  template: `<insta-login-ui (login)="login()"></insta-login-ui>`,
  styles: [],
})
export class InstaLoginFeatureComponent {
  private loginFacade = inject(LoginFacade);

  login() {
    this.loginFacade.login();
  }
}
