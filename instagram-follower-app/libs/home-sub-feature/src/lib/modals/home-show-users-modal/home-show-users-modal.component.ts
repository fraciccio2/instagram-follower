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
        <span class="input-group-text"><i class="bi bi-search"></i></span>
        <input type="text" class="form-control" placeholder="Cerca" />
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
      .close {
        background-color: white;
        border: 0;
        &:focus-visible {
          outline: 0 !important;
        }
      }

      .input-group {
        .input-group-text {
          background-color: white;
          border-right: 0;
        }
        .form-control {
          border-left: 0;
          &:focus {
            box-shadow: none;
            border-color: rgb(222, 226, 230);
          }
        }
      }

      .data-container {
        max-height: 400px;
        overflow: auto;
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
      const usersForRest = this.users.slice(
        this.page * this.numberForLoader,
        this.numberForLoader * (this.page + 1)
      );
      this.showUsers.push(...usersForRest);
      this.homeFacade.initUsersImagesProfile(
        usersForRest.map((user) => ({
          username: user.username,
          link: user.profile_pic_url,
        }))
      );
    }
  }
}
