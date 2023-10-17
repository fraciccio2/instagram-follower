import { AccountRepositoryLoginResponseNametag } from './account-repository-login-response-nametag.model';
import { AccountModel } from 'ng';

export interface AccountRepositoryLoginResponseLogged_in_user
  extends AccountModel {
  can_boost_post: boolean;
  is_business: boolean;
  account_type: number;
  is_call_to_action_enabled: null;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  reel_auto_archive: string;
  has_placed_orders: boolean;
  allowed_commenter_type: string;
  nametag: AccountRepositoryLoginResponseNametag;
  allow_contacts_sync: boolean;
  phone_number: string;
  country_code: number;
  national_number: number;
}
