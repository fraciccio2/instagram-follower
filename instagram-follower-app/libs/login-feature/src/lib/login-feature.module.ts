import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaLoginFeatureComponent } from './insta-login-feature/insta-login-feature.component';
import { LoginUiModule } from 'login-ui';
import { RouterModule } from '@angular/router';

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
  ],
  declarations: [InstaLoginFeatureComponent],
  exports: [InstaLoginFeatureComponent],
})
export class LoginFeatureModule {}
