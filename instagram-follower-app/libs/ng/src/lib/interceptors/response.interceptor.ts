import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginFacade } from 'login-data-access';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  private loginFacade = inject(LoginFacade);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          this.loginFacade.logoutStorage();
        }
        return throwError(() => err.message);
      })
    );
  }
}
