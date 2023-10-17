import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShowUsersModalComponent } from './modals';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule],
  declarations: [HomeShowUsersModalComponent],
  exports: [HomeShowUsersModalComponent],
})
export class HomeSubFeatureModule {}
