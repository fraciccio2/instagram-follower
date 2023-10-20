import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUiComponent, MatrixEffectUiComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginUiComponent, MatrixEffectUiComponent],
  exports: [LoginUiComponent, MatrixEffectUiComponent],
})
export class LoginUiModule {}
