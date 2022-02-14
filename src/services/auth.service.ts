import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';
import { TOKEN_KEY } from '../shared/constants';
import { AuthResponse } from '../shared/responses';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth$: Subject<boolean> = new Subject<boolean>();
  private isAuth = false;
  private token = '';
  private authSubscription: Subscription | undefined;

  constructor(private readonly authRepository: AuthRepository) {}

  getIsAuthStream(): Subject<boolean> {
    return this.isAuth$;
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  getToken(): string {
    return this.token;
  }

  private authSubscriber(response: AuthResponse): void {
    this.isAuth$.next(true);
    this.isAuth = true;
    this.token = response.token;
    localStorage.setItem(TOKEN_KEY, response.token);
  }

  auth(): void {
    this.authSubscription = this.authRepository
      .auth()
      .subscribe(this.authSubscriber.bind(this));
  }

  login(login: string, password: string): void {
    this.authSubscription = this.authRepository
      .login(login, password)
      .subscribe(this.authSubscriber.bind(this));
  }

  logout(): void {
    this.isAuth$.next(false);
    this.isAuth = false;
    this.token = '';
    localStorage.removeItem(TOKEN_KEY);
  }

  onInit(): void {
    if (localStorage.getItem(TOKEN_KEY)) {
      this.token = localStorage.getItem(TOKEN_KEY) || '';
      this.auth();
    }
  }

  onDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
