import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeFacade } from 'home-data-access';

@Component({
  selector: 'home-show-user-infos-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ followers ? 'Followers' : 'Seguiti' }}</h4>
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
    <div
      class="modal-body"
      *ngIf="{ accounts: userInfos$ | async } as userInfos"
    >
      <div class="search input-group mb-3">
        <span
          class="input-group-text"
          [ngClass]="{ disabled: !userInfos.accounts?.length }"
          ><i class="bi bi-search"></i
        ></span>
        <input
          [disabled]="!userInfos.accounts?.length"
          type="text"
          class="form-control"
          placeholder="Cerca"
          autocomplete="off"
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
        (scrolled)="onScroll()"
      >
        <div
          *ngFor="let user of userInfos.accounts; index as i"
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
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeShowUserInfosModalComponent implements OnInit, OnDestroy {
  private modalService = inject(NgbActiveModal);
  private homeFacade = inject(HomeFacade);

  @Input() followers: boolean | undefined;
  @Input() pk: number | undefined;

  query: string = '';
  page = 1;

  userInfos$ = this.homeFacade.userInfos$;
  imagesProfiles$ = this.homeFacade.imagesProfiles$;

  ngOnInit() {
    this.filterUsers('');
  }

  ngOnDestroy() {
    this.homeFacade.resetUserInfos();
  }

  dismiss() {
    this.modalService.dismiss();
  }

  filterUsers(query: string) {
    this.page = 1;
    if (this.pk) {
      this.query = query;
      this.homeFacade.initUserInfos(false, {
        pk: this.pk,
        page: this.page,
        query,
        followers: !!this.followers,
      });
    }
  }

  onScroll() {
    this.page++;
    if (this.pk) {
      this.homeFacade.initUserInfos(true, {
        page: this.page,
        pk: this.pk,
        query: this.query,
        followers: !!this.followers,
      });
    }
  }
}
