import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeUiModule } from 'home-ui';
import { RouterModule } from '@angular/router';
import { LoggedUserGuard } from 'ng';
import { HomeDataAccessModule } from 'home-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeFeatureComponent,
        canActivate: [LoggedUserGuard],
      },
    ]),
    HomeUiModule,
    HomeDataAccessModule,
  ],
  declarations: [HomeFeatureComponent],
  exports: [HomeFeatureComponent],
})
export class HomeFeatureModule {}
