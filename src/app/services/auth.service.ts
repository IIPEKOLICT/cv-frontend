import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthApiService } from './api/auth-api.service';
import { TOKEN_KEY } from '../shared/constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authApiService: AuthApiService
  ) {
    setTimeout(() => {
      this.isAuth.next(true);
    }, 3000)
  }

  getIsAuthStream(): Subject<boolean> {
    return this.isAuth;
  }

  auth(): void {
    // this.httpClient.get(`${API_URL}/auth`, {  })
  }

  login(login: string, password: string): void {
    this.authApiService.login(login, password).subscribe((response: HttpResponse<string>) => {
      console.log(response);
      this.isAuth.next(true);
      localStorage.setItem(TOKEN_KEY, response.body || '');
    });
  }

  logout(): void {
    this.isAuth.next(false);
    localStorage.removeItem(TOKEN_KEY);
  }
}
