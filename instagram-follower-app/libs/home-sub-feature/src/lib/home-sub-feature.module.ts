import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShowUsersModalComponent } from './modals';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule, FormsModule],
  declarations: [HomeShowUsersModalComponent],
  exports: [HomeShowUsersModalComponent],
})
export class HomeSubFeatureModule {}
