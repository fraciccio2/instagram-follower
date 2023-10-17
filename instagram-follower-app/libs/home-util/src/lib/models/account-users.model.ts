import { AccountFollowersFeed } from './account-followers-feed.model';

export interface AccountUsersModel {
  followers: AccountFollowersFeed[];
  following: AccountFollowersFeed[];
}
