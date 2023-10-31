import { ReelsMediaFeedResponseUser } from './reels-media-feed-response-user.model';

export interface ReelsMediaFeedResponseReelMentionsItem {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  user: ReelsMediaFeedResponseUser;
}
