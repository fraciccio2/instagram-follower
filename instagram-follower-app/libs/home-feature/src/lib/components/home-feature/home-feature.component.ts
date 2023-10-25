import { Component, inject, OnInit } from '@angular/core';
import { LoginFacade } from 'login-data-access';
import { take } from 'rxjs';
import { HomeFacade } from 'home-data-access';
import { filterNullish } from 'ng';
import { AccountFollowersFeed, UsersTypeEnum } from 'home-util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  HomeSearchUsersModalComponent,
  HomeShowUsersModalComponent,
} from 'home-sub-feature';

@Component({
  selector: 'home-feature',
  template: ` <home-ui
    [loggedUser]="loggedUser$ | async"
    [imageProfile]="imageProfile$ | async"
    [infos]="infos$ | async"
    [followedNotReturn]="followedNotReturn$ | async"
    [usersIDontFollow]="usersIDontFollow$ | async"
    [usersFollowerViceVersa]="usersFollowerViceVersa$ | async"
    (logout)="logout()"
    (searchUsersModal)="searchUsersModal()"
    (showUsersModal)="
      showUsersModal($event.username, $event.users, $event.type)
    "
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
  usersFollowerViceVersa$ = this.homeFacade.usersFollowerViceVersa$;

  ngOnInit() {
    this.loggedUser$.pipe(filterNullish(), take(1)).subscribe((loggedUser) => {
      this.homeFacade.initImageProfile(loggedUser.profile_pic_url);
    });
  }

  showUsersModal(
    username: string,
    users: AccountFollowersFeed[],
    type: UsersTypeEnum
  ) {
    const modal = this.modalService.open(HomeShowUsersModalComponent);
    switch (type) {
      case UsersTypeEnum.FOLLOWER:
        modal.componentInstance.title = 'Utenti che ti seguono';
        modal.componentInstance.showActionButton = false;
        break;
      case UsersTypeEnum.DONT_FOLLOW:
        modal.componentInstance.title =
          'Utenti che ti seguono e che non ricambi';
        modal.componentInstance.unfollowUserAction = false;
        break;
      case UsersTypeEnum.FOLLOWING:
        modal.componentInstance.title = 'Utenti che segui';
        break;
      case UsersTypeEnum.NOT_RETURN:
        modal.componentInstance.title = 'Utenti che segui e che non ricambiano';
        break;
      case UsersTypeEnum.VICE_VERSA:
        modal.componentInstance.title = 'Utenti che vi seguite a vicenda';
        break;
    }
    modal.componentInstance.users = users;
    modal.result.catch((reload) => {
      if (reload) {
        this.homeFacade.initProfileInfos(username);
      }
    });
  }

  logout() {
    this.loginFacade.logout();
  }

  searchUsersModal() {
    const modal = this.modalService.open(HomeSearchUsersModalComponent);
  }
}
