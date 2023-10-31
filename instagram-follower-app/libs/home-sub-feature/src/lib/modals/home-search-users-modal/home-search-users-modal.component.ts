import { Component, inject, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeFacade } from 'home-data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'home-search-users-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Cerca un utente</h4>
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
        <span class="input-group-text"><i class="bi bi-search"></i></span>
        <input
          type="text"
          class="form-control"
          placeholder="Cerca utente (min. 3 caratteri)"
          autocomplete="off"
          name="searchUser"
          ngModel
          #searchUser="ngModel"
          (input)="searchUsersFn(searchUser.value)"
        />
      </div>
      <div
        *ngIf="usersSearched$ | async as usersSearched"
        class="data-container"
      >
        <div
          *ngFor="let user of usersSearched.users; index as i"
          class="d-flex align-items-center mb-3"
          (click)="openUserPage(user.pk)"
        >
          <img
            *ngIf="imagesProfiles$ | async as imagesProfiles"
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
export class HomeSearchUsersModalComponent implements OnDestroy {
  private modalService = inject(NgbActiveModal);
  private homeFacade = inject(HomeFacade);
  private router = inject(Router);

  usersSearched$ = this.homeFacade.usersSearched$;
  imagesProfiles$ = this.homeFacade.imagesProfiles$;

  ngOnDestroy() {
    this.homeFacade.resetSearchedUsers();
  }

  dismiss() {
    this.modalService.dismiss();
  }

  searchUsersFn(value: string) {
    if (value.length >= 3) {
      this.homeFacade.searchUsers(value);
    }
  }

  openUserPage(pk: number) {
    this.router.navigate(['./home/' + pk]).catch((e) => console.error(e));
    this.modalService.close();
  }
}
