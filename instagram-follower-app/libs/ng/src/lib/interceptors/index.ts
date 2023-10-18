import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from './response.interceptor';

export * from './response.interceptor';

export const loginInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
];
