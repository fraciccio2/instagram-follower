import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ReelsMediaFeedResponseItem,
  UserRepositoryInfoResponseUser,
} from 'home-util';

@Component({
  selector: 'home-user-ui',
  templateUrl: './home-user-ui.component.html',
  styleUrls: ['./home-user-ui.component.scss'],
})
export class HomeUserUiComponent {
  @Input() activeIndex: number = 0;
  @Input() stories: ReelsMediaFeedResponseItem[] | undefined | null;
  @Input() showStories: boolean | undefined;
  @Input() user: UserRepositoryInfoResponseUser | undefined | null;
  @Input() userImageProfile: string | undefined | null;
  @Output() closeStory = new EventEmitter<void>();
  @Output() returnBack = new EventEmitter<void>();
  @Output() openHdProfileImage = new EventEmitter<string>();
  @Output() changeStory = new EventEmitter<boolean>();
  @Output() seeStories = new EventEmitter<number>();
}
