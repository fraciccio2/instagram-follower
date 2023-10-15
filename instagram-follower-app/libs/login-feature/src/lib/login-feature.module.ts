import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaLoginFeatureComponent } from './insta-login-feature/insta-login-feature.component';
import { LoginUiModule } from 'login-ui';
import { RouterModule } from '@angular/router';
import { LoginDataAccessModule } from 'login-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: InstaLoginFeatureComponent,
      },
    ]),
    LoginUiModule,
    LoginDataAccessModule,
  ],
  declarations: [InstaLoginFeatureComponent],
  exports: [InstaLoginFeatureComponent],
})
export class LoginFeatureModule {}
