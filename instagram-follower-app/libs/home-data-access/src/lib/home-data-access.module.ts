import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHome from './+state/home/home.reducer';
import { HomeEffects } from './+state/home/home.effects';
import { HomeFacade } from './+state/home/home.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHome.HOME_FEATURE_KEY, fromHome.homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  providers: [HomeFacade],
})
export class HomeDataAccessModule {}
