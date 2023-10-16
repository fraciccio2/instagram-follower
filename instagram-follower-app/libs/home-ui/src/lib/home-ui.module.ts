import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from './components/home-ui/home-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeUiComponent],
  exports: [HomeUiComponent],
})
export class HomeUiModule {}
