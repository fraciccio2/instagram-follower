import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShowUsersModalComponent } from './modals';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeShowUsersModalComponent],
  exports: [HomeShowUsersModalComponent],
})
export class HomeSubFeatureModule {}
