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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  private loginFacade = inject(LoginFacade);
  private modalService = inject(NgbModal);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          this.loginFacade.logoutStorage();
          this.modalService.dismissAll();
        }
        return throwError(() => err.message);
      })
    );
  }
}
