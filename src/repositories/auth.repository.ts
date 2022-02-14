import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';
import { AuthResponse } from '../shared/responses';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private route = `${API_URL}/auth`;

  constructor(private readonly httpClient: HttpClient) {}

  auth(): Observable<AuthResponse> {
    return this.httpClient.get<AuthResponse>(this.route);
  }

  login(login: string, password: string): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.route, { login, password });
  }
}
