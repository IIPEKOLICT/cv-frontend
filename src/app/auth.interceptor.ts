import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHORIZATION_KEY, TOKEN_KEY } from './shared/constants';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.append(
        AUTHORIZATION_KEY,
        localStorage.getItem(TOKEN_KEY) || ''
      ),
    });

    return next.handle(cloned);
  }
}
