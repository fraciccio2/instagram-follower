import { NgModule } from '@angular/core';
import { SpacePipe } from 'ng';

const pipes = [SpacePipe];

@NgModule({
  declarations: [pipes],
  exports: [pipes],
})
export class NgBaseModule {}
