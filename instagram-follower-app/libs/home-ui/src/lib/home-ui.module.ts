import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent, HomeUserUiComponent } from './components';
import { LoginUiModule } from 'login-ui';

@NgModule({
  imports: [CommonModule, LoginUiModule],
  declarations: [HomeUiComponent, HomeUserUiComponent],
  exports: [HomeUiComponent, HomeUserUiComponent],
})
export class HomeUiModule {}
