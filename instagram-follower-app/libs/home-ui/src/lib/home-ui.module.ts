import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomeStoryViewerUiComponent,
  HomeUiComponent,
  HomeUserUiComponent,
} from './components';
import { LoginUiModule } from 'login-ui';
import { NgBaseModule } from 'ng';

@NgModule({
  imports: [CommonModule, LoginUiModule, NgBaseModule],
  declarations: [
    HomeUiComponent,
    HomeUserUiComponent,
    HomeStoryViewerUiComponent,
  ],
  exports: [HomeUiComponent, HomeUserUiComponent, HomeStoryViewerUiComponent],
})
export class HomeUiModule {}
