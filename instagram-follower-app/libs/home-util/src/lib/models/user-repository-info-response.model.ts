import { AccountModel } from 'ng';

export interface UserRepositoryInfoResponseBiography_with_entities {
  raw_text: string;
  entities: any[];
}

export interface UserRepositoryInfoResponseHdProfilePicVersionsItem {
  width: number;
  height: number;
  url: string;
}

export interface UserRepositoryInfoResponseHd_profile_pic_url_info {
  url: string;
  width: number;
  height: number;
}

export interface UserRepositoryInfoResponseNametag {
  mode: number;
  gradient: string;
  emoji: string;
  selfie_sticker: string;
}

export interface UserRepositorySearchResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}

export interface UserRepositorySearchResponseRootObject {
  num_results: number;
  users: UserRepositorySearchResponseUsersItem[];
  has_more: boolean;
  rank_token: string;
  status: string;
}

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

export interface UserRepositoryInfoResponseUser extends AccountModel {
  media_count: number;
  geo_media_count: number;
  follower_count: number;
  following_count: number;
  following_tag_count: number;
  biography: string;
  can_link_entities_in_bio: boolean;
  biography_with_entities: UserRepositoryInfoResponseBiography_with_entities;
  external_url: string;
  has_biography_translation: boolean;
  can_boost_post: boolean;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  can_convert_to_business: boolean;
  can_create_sponsor_tags: boolean;
  can_be_tagged_as_sponsor: boolean;
  total_igtv_videos: number;
  total_ar_effects: number;
  reel_auto_archive: string;
  is_profile_action_needed: boolean;
  usertags_count: number;
  usertag_review_enabled: boolean;
  is_needy: boolean;
  is_interest_account: boolean;
  has_recommend_accounts: boolean;
  has_chaining: boolean;
  hd_profile_pic_versions: UserRepositoryInfoResponseHdProfilePicVersionsItem[];
  hd_profile_pic_url_info: UserRepositoryInfoResponseHd_profile_pic_url_info;
  has_placed_orders: boolean;
  can_tag_products_from_merchants: boolean;
  show_business_conversion_icon: boolean;
  show_conversion_edit_entry: boolean;
  aggregate_promote_engagement: boolean;
  allowed_commenter_type: string;
  is_video_creator: boolean;
  has_profile_video_feed: boolean;
  has_highlight_reels: boolean;
  is_eligible_to_show_fb_cross_sharing_nux: boolean;
  page_id_for_new_suma_biz_account: null;
  can_be_reported_as_fraud: boolean;
  is_business: boolean;
  account_type: number;
  is_call_to_action_enabled: null;
  include_direct_blacklist_status: boolean;
  can_follow_hashtag: boolean;
  is_potential_business: boolean;
  feed_post_reshare_disabled: boolean;
  besties_count: number;
  show_besties_badge: boolean;
  recently_bestied_by_count: number;
  nametag: UserRepositoryInfoResponseNametag;
  auto_expand_chaining: boolean;
  highlight_reshare_disabled: boolean;
  public_email?: string;
  address_street?: string;
  category?: string;
  contact_phone_number?: string;
  public_phone_country_code?: string;
}
