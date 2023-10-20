import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from './components/home-ui/home-ui.component';
import { LoginUiModule } from 'login-ui';

@NgModule({
  imports: [CommonModule, LoginUiModule],
  declarations: [HomeUiComponent],
  exports: [HomeUiComponent],
})
export class HomeUiModule {}
