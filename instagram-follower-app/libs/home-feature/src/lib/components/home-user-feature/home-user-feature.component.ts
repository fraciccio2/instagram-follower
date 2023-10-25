import { Component, inject } from '@angular/core';
import { HomeFacade } from 'home-data-access';

@Component({
  selector: 'home-user-feature',
  template: ` <home-user-ui
    [user]="user$ | async"
    (seeStories)="seeStories($event)"
  ></home-user-ui>`,
  styles: [],
})
export class HomeUserFeatureComponent {
  private homeFacade = inject(HomeFacade);

  user$ = this.homeFacade.user$;

  seeStories(pk: number) {
    this.homeFacade.initStories(pk);
  }
}
