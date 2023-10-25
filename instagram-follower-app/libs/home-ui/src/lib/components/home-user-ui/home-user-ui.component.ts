import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AccountFollowersFeed,
  AccountUsersModel,
  UsersTypeEnum,
} from 'home-util';

@Component({
  selector: 'home-user-ui',
  templateUrl: './home-user-ui.component.html',
  styleUrls: ['./home-user-ui.component.scss'],
})
export class HomeUserUiComponent {
  @Input() user: AccountFollowersFeed | undefined | null;
  @Input() userImageProfile: string | undefined | null;
  @Input() userInfos: AccountUsersModel | undefined | null;
  @Output() showUsersModal = new EventEmitter<{
    username: string;
    users: AccountFollowersFeed[];
    type: UsersTypeEnum;
  }>();
}
