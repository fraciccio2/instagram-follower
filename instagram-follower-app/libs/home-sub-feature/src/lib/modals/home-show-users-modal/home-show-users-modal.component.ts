import { Component, inject, Input, OnInit } from '@angular/core';
import { AccountFollowersFeed } from 'home-util';
import { HomeFacade } from 'home-data-access';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-show-users-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button
        (click)="dismiss()"
        type="button"
        data-dismiss="modal"
        aria-label="Close"
        class="close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="search input-group mb-3">
        <span class="input-group-text" [ngClass]="{ disabled: !users?.length }"
          ><i class="bi bi-search"></i
        ></span>
        <input
          [disabled]="!users?.length"
          type="text"
          class="form-control"
          placeholder="Cerca"
          name="searchUser"
          ngModel
          #searchUser="ngModel"
          (input)="filterUsers(searchUser.value)"
        />
      </div>
      <div
        *ngIf="imagesProfiles$ | async as imagesProfiles"
        class="data-container"
        infinite-scroll
        [infiniteScrollDistance]="2"
        [infiniteScrollThrottle]="50"
        [scrollWindow]="false"
        [infiniteScrollDisabled]="!!(usersImageProfileLoading$ | async)"
        (scrolled)="onScroll()"
      >
        <div
          *ngFor="let user of showUsers; index as i"
          class="d-flex align-items-center mb-3"
        >
          <img
            [src]="imagesProfiles[user.username]"
            class="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div class="d-flex flex-column">
            <label class="fw-bold mb-1"
              >{{ user.username
              }}<i *ngIf="user.is_private" class="bi bi-lock-fill ms-2"></i
            ></label>
            {{ user.full_name }}
          </div>
          <i
            (click)="$event.stopPropagation(); actionOnUser(i, user.pk)"
            *ngIf="showActionButton && !hideActionButtonArr[i]"
            class="bi {{
              unfollowUserAction ? 'bi-person-dash' : 'bi-person-add'
            }} ms-auto fs-4 me-1 cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeShowUsersModalComponent implements OnInit {
  private homeFacade = inject(HomeFacade);
  private modalService = inject(NgbActiveModal);

  @Input() title: string | undefined;
  @Input() users: AccountFollowersFeed[] | undefined;
  @Input() showActionButton: boolean = true;
  @Input() unfollowUserAction: boolean = true;

  showUsers: AccountFollowersFeed[] = [];
  hideActionButtonArr: boolean[] = [];
  page = 0;
  numberForLoader = 20;
  filterValue: string | null = null;

  usersImageProfileLoading$ = this.homeFacade.usersImageProfileLoading$;
  imagesProfiles$ = this.homeFacade.imagesProfiles$;

  ngOnInit() {
    this.scrollNewUsers();
  }

  dismiss() {
    this.modalService.dismiss(!!this.hideActionButtonArr.length);
  }

  onScroll() {
    this.page++;
    this.scrollNewUsers();
  }

  scrollNewUsers() {
    if (this.users) {
      if (this.filterValue) {
        this.scrollNewUsersFilter();
      } else {
        this.populateScroll();
      }
    }
  }

  filterUsers(value: string) {
    this.filterValue = value;
    if (this.users && this.filterValue) {
      this.scrollNewUsersFilter(true);
    } else if (!this.filterValue) {
      this.page = 0;
      this.populateScroll(true);
    }
  }

  scrollNewUsersFilter(first?: boolean) {
    if (this.users) {
      const filterUsers = this.users.filter(
        (user) =>
          user.username.includes(this.filterValue ?? '') ||
          user.full_name.includes(this.filterValue ?? '')
      );
      first ? (this.page = 0) : null;
      const usersForRest = filterUsers.slice(
        this.page * this.numberForLoader,
        this.numberForLoader * (this.page + 1)
      );
      first
        ? (this.showUsers = usersForRest)
        : this.showUsers.push(...usersForRest);
      this.homeFacade.initUsersImagesProfile(
        usersForRest.map((user) => ({
          username: user.username,
          link: user.profile_pic_url,
        }))
      );
    }
  }

  populateScroll(first?: boolean) {
    if (this.users) {
      const usersForRest = this.users.slice(
        this.page * this.numberForLoader,
        this.numberForLoader * (this.page + 1)
      );
      first
        ? (this.showUsers = usersForRest)
        : this.showUsers.push(...usersForRest);
      this.homeFacade.initUsersImagesProfile(
        usersForRest.map((user) => ({
          username: user.username,
          link: user.profile_pic_url,
        }))
      );
    }
  }

  actionOnUser(index: number, pk: number) {
    this.hideActionButtonArr[index] = true;
    if (this.unfollowUserAction) {
      this.homeFacade.unfollowUser(pk);
    } else {
      this.homeFacade.followUser(pk);
    }
  }
}
