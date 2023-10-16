import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderUiComponent } from './loader-ui/loader-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderUiComponent],
  exports: [LoaderUiComponent],
})
export class LoaderUiModule {}
