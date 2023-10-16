import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderFeatureComponent } from './loader-feature/loader-feature.component';
import { LoaderUiModule } from 'loader-ui';
import { LoaderDataAccessModule } from 'loader-data-access';

@NgModule({
  imports: [CommonModule, LoaderUiModule, LoaderDataAccessModule],
  declarations: [LoaderFeatureComponent],
  exports: [LoaderFeatureComponent],
})
export class LoaderFeatureModule {}
