import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginDataAccessRestService {
  private endpoint = 'http://localhost:3000';
  private http = inject(HttpClient);

  login(username: string, password: string) {
    const url = `${this.endpoint}/login`;
    return this.http.post(url, { username, password });
  }
}
