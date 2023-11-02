import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HomeFacade } from 'home-data-access';
import { filterNullish } from 'ng';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeShowUserInfosModalComponent } from 'home-sub-feature';

@Component({
  selector: 'home-user-feature',
  template: ` <home-user-ui
    [activeIndex]="activeIndex"
    [showStories]="showStories"
    [stories]="stories$ | async"
    [userImageProfile]="userImageProfile$ | async"
    [user]="user$ | async"
    (closeStory)="closeStory()"
    (returnBack)="returnBack()"
    (openHdProfileImage)="openHdProfileImage($event)"
    (changeStory)="changeStory($event)"
    (openModalForAccounts)="openModalForAccounts($event)"
    (seeStories)="seeStories($event)"
  ></home-user-ui>`,
  styles: [],
})
export class HomeUserFeatureComponent implements OnInit, OnDestroy {
  private homeFacade = inject(HomeFacade);
  private router = inject(Router);
  private modalService = inject(NgbModal);
  private activatedRouter = inject(ActivatedRoute);

  showStories = false;
  activeIndex = 0;
  pk: string = '';

  user$ = this.homeFacade.user$;
  userImageProfile$ = this.homeFacade.userImageProfile$;
  stories$ = this.homeFacade.stories$;

  ngOnInit() {
    this.user$
      .pipe(filterNullish(), take(1))
      .subscribe((user) =>
        this.homeFacade.initUserImageProfile(user.profile_pic_url)
      );
    this.pk = this.activatedRouter.snapshot.params['id'];
  }

  ngOnDestroy() {
    this.homeFacade.resetUser();
  }

  seeStories(pk: number) {
    this.homeFacade.initStories(pk);
    this.showStories = true;
  }

  closeStory() {
    this.showStories = false;
    this.activeIndex = 0;
  }

  changeStory(next: boolean) {
    next ? this.activeIndex++ : this.activeIndex--;
  }

  openHdProfileImage(url: string) {
    window.open(url, '_blank');
  }

  returnBack() {
    this.router.navigate(['./home']).catch((e) => console.error(e));
  }

  openModalForAccounts(followers: boolean) {
    const modal = this.modalService.open(HomeShowUserInfosModalComponent);
    modal.componentInstance.pk = this.pk;
    modal.componentInstance.followers = followers;
  }
}
