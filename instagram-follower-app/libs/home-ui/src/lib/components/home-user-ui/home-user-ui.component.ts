import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserRepositoryInfoResponseUser } from 'home-util';

@Component({
  selector: 'home-user-ui',
  templateUrl: './home-user-ui.component.html',
  styleUrls: ['./home-user-ui.component.scss'],
})
export class HomeUserUiComponent {
  @Input() user: UserRepositoryInfoResponseUser | undefined | null;
  @Input() userImageProfile: string | undefined | null;
  @Output() seeStories = new EventEmitter<number>();
}
