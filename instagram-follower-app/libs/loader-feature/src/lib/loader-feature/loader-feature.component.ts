import { Component, inject } from '@angular/core';
import { LoaderFacade } from 'loader-data-access';

@Component({
  selector: 'loader-feature',
  template: `<loader-ui *ngIf="loading$ | async"></loader-ui>`,
  styles: [],
})
export class LoaderFeatureComponent {
  private loaderFacade = inject(LoaderFacade);

  loading$ = this.loaderFacade.loading$;
}
