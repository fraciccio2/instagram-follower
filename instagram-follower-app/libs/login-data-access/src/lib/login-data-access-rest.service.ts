import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountRepositoryLoginResponseLogged_in_user } from '../../../login-util/src/lib/models';

@Injectable({
  providedIn: 'root',
})
export class LoginDataAccessRestService {
  private endpoint = 'http://localhost:3000';
  private http = inject(HttpClient);

  login(
    username: string,
    password: string
  ): Observable<AccountRepositoryLoginResponseLogged_in_user> {
    const url = `${this.endpoint}/login`;
    return this.http.post<AccountRepositoryLoginResponseLogged_in_user>(url, {
      username,
      password,
    });
  }
}
