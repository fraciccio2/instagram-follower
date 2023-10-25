import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountRepositoryLoginResponseLogged_in_user } from 'login-util';
import {
  AccountFollowersFeed,
  AccountUsersModel,
  UsersTypeEnum,
} from 'home-util';

@Component({
  selector: 'home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
})
export class HomeUiComponent {
  @Input() loggedUser:
    | AccountRepositoryLoginResponseLogged_in_user
    | undefined
    | null;
  @Input() imageProfile: string | undefined | null;
  @Input() infos: AccountUsersModel | undefined | null;
  @Input() followedNotReturn: AccountFollowersFeed[] | undefined | null;
  @Input() usersIDontFollow: AccountFollowersFeed[] | undefined | null;
  @Input() usersFollowerViceVersa: AccountFollowersFeed[] | undefined | null;
  @Output() logout = new EventEmitter<void>();
  @Output() searchUsersModal = new EventEmitter<void>();
  @Output() showUsersModal = new EventEmitter<{
    username: string;
    users: AccountFollowersFeed[];
    type: UsersTypeEnum;
  }>();

  UsersTypeEnum = UsersTypeEnum;
}
