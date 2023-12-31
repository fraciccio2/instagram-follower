import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AccountFollowersFeed, AccountUsersModel } from 'home-util';

@Injectable({
  providedIn: 'root',
})
export class HomeDataAccessRestService {
  private endpoint = 'http://localhost:3000';
  private http = inject(HttpClient);

  getImageProfile(link: string): Observable<Blob> {
    const url = `${this.endpoint}/proxy-image`;
    return this.http.get(url, {
      params: { imageUrl: link },
      responseType: 'blob',
    });
  }

  getProfileInfos(username: string): Observable<AccountUsersModel> {
    const url = `${this.endpoint}/infos`;
    // return this.http.get<AccountUsersModel>(url, {
    //   params: { username },
    // });
    const followers: AccountFollowersFeed[] = [];
    for (let i = 0; i < 200; i++) {
      const name = Math.random().toString(36).substring(2, 7);
      followers.push({
        full_name: name,
        username: name,
        profile_pic_url: 'sdfsdf',
        third_party_downloads_enabled: 0,
        pk: 5544252,
        pk_id: 'dsadadas',
        strong_id__: 'ewrewrwe',
        latest_reel_media: 0,
        is_private: false,
        is_possible_scammer: false,
        is_verified: false,
        fbid_v2: 'sdfsf',
        has_anonymous_profile_picture: false,
        account_badge: [],
        is_possible_bad_actor: {
          is_possible_impersonator: {
            connected_similar_user_id: null,
            is_unconnected_impersonator: false,
          },
          is_possible_scammer: false,
          is_possible_impersonator_threads: {
            connected_similar_user_id: null,
            is_unconnected_impersonator: false,
          },
        },
      });
    }
    return of({
      followers,
      following: [
        {
          account_badge: [],
          fbid_v2: 'dsfsd',
          full_name: 'ciro',
          has_anonymous_profile_picture: false,
          is_possible_bad_actor: {
            is_possible_impersonator: {
              connected_similar_user_id: null,
              is_unconnected_impersonator: false,
            },
            is_possible_scammer: false,
            is_possible_impersonator_threads: {
              connected_similar_user_id: null,
              is_unconnected_impersonator: false,
            },
          },
          is_possible_scammer: false,
          is_private: false,
          is_verified: false,
          latest_reel_media: 0,
          profile_pic_id: undefined,
          pk_id: 'sdfdsf',
          username: 'ciro32',
          profile_pic_url: 'dasda',
          strong_id__: 'dasda',
          pk: 32423423,
          third_party_downloads_enabled: 0,
        },
      ],
    });
  }
}
