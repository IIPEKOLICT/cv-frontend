import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_URL } from '../../shared/constants';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private route = `${API_URL}/auth`;

  constructor(private readonly httpClient: HttpClient) {}

  auth(): Observable<string> {
    return this.httpClient.get<string>(this.route);
  }

  login(login: string, password: string): Observable<HttpResponse<string>> {
    return this.httpClient.post<string>(this.route, { login, password }, { observe: 'response' });
  }
}
