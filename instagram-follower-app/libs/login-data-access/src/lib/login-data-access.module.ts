import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from './+state/login/login.reducer';
import { LoginEffects } from './+state/login/login.effects';
import { LoginFacade } from './+state/login/login.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [LoginFacade],
})
export class LoginDataAccessModule {}
