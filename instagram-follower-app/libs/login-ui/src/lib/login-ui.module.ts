import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaLoginUiComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [InstaLoginUiComponent],
  exports: [InstaLoginUiComponent],
})
export class LoginUiModule {}
