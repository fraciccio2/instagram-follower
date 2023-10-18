import { Component, inject, OnInit } from '@angular/core';
import { LoginFacade } from 'login-data-access';
import { take } from 'rxjs';
import { HomeFacade } from 'home-data-access';
import { filterNullish } from 'ng';
import { AccountFollowersFeed } from 'home-util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeShowUsersModalComponent } from 'home-sub-feature';

@Component({
  selector: 'home-feature',
  template: ` <home-ui
    [loggedUser]="loggedUser$ | async"
    [imageProfile]="imageProfile$ | async"
    [infos]="infos$ | async"
    [followedNotReturn]="followedNotReturn$ | async"
    [usersIDontFollow]="usersIDontFollow$ | async"
    (showFollowingModal)="showFollowingModal($event)"
    (showFollowerModal)="showFollowerModal($event)"
  ></home-ui>`,
  styles: [],
})
export class HomeFeatureComponent implements OnInit {
  private loginFacade = inject(LoginFacade);
  private homeFacade = inject(HomeFacade);
  private modalService = inject(NgbModal);

  loggedUser$ = this.loginFacade.loggedUser$;
  imageProfile$ = this.homeFacade.imageProfile$;
  infos$ = this.homeFacade.infos$;
  followedNotReturn$ = this.homeFacade.followedNotReturn$;
  usersIDontFollow$ = this.homeFacade.usersIDontFollow$;

  ngOnInit() {
    this.loggedUser$.pipe(filterNullish(), take(1)).subscribe((loggedUser) => {
      this.homeFacade.initImageProfile(loggedUser.profile_pic_url);
    });
  }

  showFollowingModal(following: AccountFollowersFeed[]) {
    const modal = this.modalService.open(HomeShowUsersModalComponent);
    modal.componentInstance.title = 'Utenti che segui';
    modal.componentInstance.users = following;
  }

  showFollowerModal(follower: AccountFollowersFeed[]) {
    const modal = this.modalService.open(HomeShowUsersModalComponent);
    modal.componentInstance.title = 'Utenti che ti seguono';
    modal.componentInstance.users = follower;
  }
}
