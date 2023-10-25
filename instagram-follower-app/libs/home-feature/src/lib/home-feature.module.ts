import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent, HomeUserFeatureComponent } from './components';
import { HomeUiModule } from 'home-ui';
import { RouterModule } from '@angular/router';
import { LoggedUserGuard } from 'ng';
import { HomeDataAccessModule } from 'home-data-access';
import { HomeFeatureGuard } from './home-feature.guard';
import { HomeUserFeatureGuard } from './home-user-feature.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeFeatureComponent,
        canActivate: [LoggedUserGuard, HomeFeatureGuard],
      },
      {
        path: 'home/:id',
        component: HomeUserFeatureComponent,
        canActivate: [LoggedUserGuard, HomeUserFeatureGuard],
      },
    ]),
    HomeUiModule,
    HomeDataAccessModule,
  ],
  declarations: [HomeFeatureComponent, HomeUserFeatureComponent],
  exports: [HomeFeatureComponent, HomeUserFeatureComponent],
})
export class HomeFeatureModule {}
