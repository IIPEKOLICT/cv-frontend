import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthApiService } from './api/auth-api.service';
import { TOKEN_KEY } from '../shared/constants';
import { AuthResponse } from '../shared/responses';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly authApiService: AuthApiService) {}

  getIsAuthStream(): Subject<boolean> {
    return this.isAuth$;
  }

  private authSubscriber(response: AuthResponse): void {
    this.isAuth$.next(true);
    localStorage.setItem(TOKEN_KEY, `Bearer ${response.token}`);
  }

  auth(): void {
    this.authApiService.auth().subscribe(this.authSubscriber.bind(this));
  }

  login(login: string, password: string): void {
    this.authApiService.login(login, password).subscribe(this.authSubscriber.bind(this));
  }

  logout(): void {
    this.isAuth$.next(false);
    localStorage.removeItem(TOKEN_KEY);
  }
}
