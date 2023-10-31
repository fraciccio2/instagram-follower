import { ReelsMediaFeedResponseFriendshipStatus } from './reels-media-feed-response-friendship-status.model';

export interface ReelsMediaFeedResponseUser {
  pk: number;
  username?: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  friendship_status?: ReelsMediaFeedResponseFriendshipStatus;
  is_verified?: boolean;
}
