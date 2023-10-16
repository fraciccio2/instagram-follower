import { Component, inject } from '@angular/core';
import { LoginFacade } from 'login-data-access';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-feature',
  template: `<login-ui
    [formGroupLogin]="formGroupLogin"
    [formControlNamePassword]="formControlNamePassword"
    [formControlNameUsername]="formControlNameUsername"
    (login)="login()"
  ></login-ui>`,
  styles: [],
})
export class LoginFeatureComponent {
  private loginFacade = inject(LoginFacade);

  formControlNameUsername = 'username';
  formControlNamePassword = 'password';
  formGroupLogin = new FormGroup({
    [this.formControlNameUsername]: new FormControl('', Validators.required),
    [this.formControlNamePassword]: new FormControl('', Validators.required),
  });

  login() {
    this.loginFacade.login(
      this.formGroupLogin.get(this.formControlNameUsername)?.value,
      this.formGroupLogin.get(this.formControlNamePassword)?.value
    );
  }
}
