import { NgModule } from '@angular/core';
import { FilterByTextPipe } from './pipes';

const pipes = [FilterByTextPipe];

@NgModule({
  declarations: [pipes],
  exports: [pipes],
})
export class BaseNgModule {}
