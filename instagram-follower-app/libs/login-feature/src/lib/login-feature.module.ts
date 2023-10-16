import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUiModule } from 'login-ui';
import { RouterModule } from '@angular/router';
import { LoginDataAccessModule } from 'login-data-access';
import { LoginFeatureComponent } from './login-feature/login-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFeatureComponent,
      },
    ]),
    LoginUiModule,
    LoginDataAccessModule,
  ],
  declarations: [LoginFeatureComponent],
  exports: [LoginFeatureComponent],
})
export class LoginFeatureModule {}
