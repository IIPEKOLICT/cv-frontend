import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthRepository } from './repositories/auth.repository';
import { TOKEN_KEY } from '../shared/constants';
import { AuthResponse } from '../shared/responses';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth$: Subject<boolean> = new Subject<boolean>();
  private isAuth = false;

  constructor(private readonly authRepository: AuthRepository) {}

  getIsAuthStream(): Subject<boolean> {
    return this.isAuth$;
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  private authSubscriber(response: AuthResponse): void {
    this.isAuth$.next(true);
    this.isAuth = true;
    localStorage.setItem(TOKEN_KEY, `Bearer ${response.token}`);
  }

  auth(): void {
    this.authRepository.auth().subscribe(this.authSubscriber.bind(this));
  }

  login(login: string, password: string): void {
    this.authRepository.login(login, password).subscribe(this.authSubscriber.bind(this));
  }

  logout(): void {
    this.isAuth$.next(false);
    this.isAuth = false;
    localStorage.removeItem(TOKEN_KEY);
  }
}
