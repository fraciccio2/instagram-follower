import { Component, Input } from '@angular/core';
import { AccountFollowersFeed } from 'home-util';

@Component({
  selector: 'home-show-users-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button
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
      <div *ngFor="let user of users" class="d-flex align-items-center">
        <img [src]="user.profile_pic_url" class="rounded-circle me-3" />
        <div class="d-flex flex-column">
          <label class="fw-bold mb-1">{{ user.username }}</label>
          {{ user.full_name }}
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeShowUsersModalComponent {
  @Input() title: string | undefined;
  @Input() users: AccountFollowersFeed[] | undefined;
}
