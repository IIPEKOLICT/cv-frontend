import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/auth.interceptor';

export const AuthInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
