import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomePostsTabUiComponent,
  HomeStoryViewerUiComponent,
  HomeUiComponent,
  HomeUserUiComponent,
} from './components';
import { LoginUiModule } from 'login-ui';
import { NgBaseModule } from 'ng';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, LoginUiModule, NgBaseModule, NgbNavModule],
  declarations: [
    HomeUiComponent,
    HomeUserUiComponent,
    HomeStoryViewerUiComponent,
    HomePostsTabUiComponent,
  ],
  exports: [
    HomeUiComponent,
    HomeUserUiComponent,
    HomeStoryViewerUiComponent,
    HomePostsTabUiComponent,
  ],
})
export class HomeUiModule {}
