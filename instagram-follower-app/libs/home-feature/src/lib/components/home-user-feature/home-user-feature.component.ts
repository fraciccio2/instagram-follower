import { Component, inject } from '@angular/core';
import { HomeFacade } from 'home-data-access';

@Component({
  selector: 'home-user-feature',
  template: ` <home-user-ui></home-user-ui>`,
  styles: [],
})
export class HomeUserFeatureComponent {
  private homeFacade = inject(HomeFacade);
}
