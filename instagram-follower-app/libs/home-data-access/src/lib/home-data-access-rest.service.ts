import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
