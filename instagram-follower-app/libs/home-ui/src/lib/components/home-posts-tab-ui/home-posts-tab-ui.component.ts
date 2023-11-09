import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserFeedResponseItemsItem } from 'home-util';

@Component({
  selector: 'home-posts-tab-ui',
  templateUrl: './home-posts-tab-ui.component.html',
  styleUrls: ['./home-posts-tab-ui.component.scss'],
})
export class HomePostsTabUiComponent implements OnInit {
  @Input() cols: number | undefined;
  @Input() numberOfPost: number | undefined;
  @Input() post: UserFeedResponseItemsItem[] | undefined | null;
  @Input() postImage: Record<string, string> | undefined | null;
  @Output() initPosts = new EventEmitter<void>();
  @Output() openPost = new EventEmitter<string>();

  ngOnInit() {
    this.initPosts.emit();
  }
}
