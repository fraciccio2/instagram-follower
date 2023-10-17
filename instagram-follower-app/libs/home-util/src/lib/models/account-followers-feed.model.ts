import { AccountModel } from 'ng';

export interface AccountFollowersFeed extends AccountModel {
  account_badge: string[];
  fbid_v2: string;
  is_possible_bad_actor: {
    is_possible_impersonator: {
      connected_similar_user_id: boolean | null;
      is_unconnected_impersonator: boolean;
    };
    is_possible_impersonator_threads: {
      connected_similar_user_id: boolean | null;
      is_unconnected_impersonator: boolean;
    };
    is_possible_scammer: boolean;
  };
  is_possible_scammer: boolean;
  latest_reel_media: number;
  pk_id: string;
  strong_id__: string;
  third_party_downloads_enabled: number;
}
