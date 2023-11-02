import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomeSearchUsersModalComponent,
  HomeShowUserInfosModalComponent,
  HomeShowUsersModalComponent,
} from './modals';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule, FormsModule],
  declarations: [
    HomeShowUsersModalComponent,
    HomeSearchUsersModalComponent,
    HomeShowUserInfosModalComponent,
  ],
  exports: [
    HomeShowUsersModalComponent,
    HomeSearchUsersModalComponent,
    HomeShowUserInfosModalComponent,
  ],
})
export class HomeSubFeatureModule {}
