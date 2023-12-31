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
        (click)="close()"
        type="button"
        data-dismiss="modal"
        aria-label="Close"
        class="close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
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
          *ngFor="let user of showUsers"
          class="d-flex align-items-center mb-3"
        >
          <img
            [src]="imagesProfiles[user.username]"
            class="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div class="d-flex flex-column">
            <label class="fw-bold mb-1">{{ user.username }}</label>
            {{ user.full_name }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-header {
        background-color: black;
        color: var(--green-m);
        border-bottom-color: var(--green-m);

        .close {
          background-color: transparent;
          border: 0;
          color: var(--green-m);
          &:focus-visible {
            outline: 0 !important;
          }
        }
      }

      .modal-body {
        background-color: black;
        color: var(--green-m);
        .input-group {
          border: 0;
          .input-group-text {
            background-color: #565151;
            border: 0;
            &.disabled {
              background-color: #565151;
            }
          }
          .form-control {
            background-color: #565151;
            border: 0;
            &:focus {
              box-shadow: none;
            }
          }
        }
      }

      .data-container {
        max-height: 400px;
        overflow: auto;

        .rounded-circle {
          border: 1px solid var(--green-m);
        }
      }
    `,
  ],
})
export class HomeShowUsersModalComponent implements OnInit {
  private homeFacade = inject(HomeFacade);
  private modalService = inject(NgbActiveModal);

  @Input() title: string | undefined;
  @Input() users: AccountFollowersFeed[] | undefined;

  showUsers: AccountFollowersFeed[] = [];
  page = 0;
  numberForLoader = 20;
  filterValue: string | null = null;

  usersImageProfileLoading$ = this.homeFacade.usersImageProfileLoading$;
  imagesProfiles$ = this.homeFacade.imagesProfiles$;

  ngOnInit() {
    this.scrollNewUsers();
  }

  close() {
    this.modalService.close();
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
}
