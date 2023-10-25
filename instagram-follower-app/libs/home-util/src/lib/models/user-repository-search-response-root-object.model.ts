import { UserRepositorySearchResponseUsersItem } from './user-repository-search-response-users-item.model';

export interface UserRepositorySearchResponseRootObject {
  num_results: number;
  users: UserRepositorySearchResponseUsersItem[];
  has_more: boolean;
  rank_token: string;
  status: string;
}
