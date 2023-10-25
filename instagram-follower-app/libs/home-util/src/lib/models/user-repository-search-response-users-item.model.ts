import { AccountModel } from 'ng';
import { UserRepositorySearchResponseFriendship_status } from './user-repository-search-response-friendship_status.model';

export interface UserRepositorySearchResponseUsersItem extends AccountModel {
  friendship_status: UserRepositorySearchResponseFriendship_status;
  follower_count: number;
  byline: string;
  mutual_followers_count: number;
  latest_reel_media?: number;
  social_context?: string;
  search_social_context?: string;
  unseen_count?: number;
}
