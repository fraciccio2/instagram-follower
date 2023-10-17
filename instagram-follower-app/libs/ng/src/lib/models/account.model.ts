export interface AccountModel {
  full_name: string;
  has_anonymous_profile_picture: boolean;
  is_private: boolean;
  is_verified: boolean;
  pk: number;
  profile_pic_id?: string;
  profile_pic_url: string;
  username: string;
}
