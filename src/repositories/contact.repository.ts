import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';
import { DeleteResponse } from '../shared/responses';
import { Contact } from '../shared/models';

@Injectable({ providedIn: 'root' })
export class ContactRepository {
  private route = `${API_URL}/contact`;

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.route);
  }

  create(formData: FormData): Observable<Contact> {
    return this.httpClient.post<Contact>(this.route, formData);
  }

  change(id: number, formData: FormData): Observable<Contact> {
    return this.httpClient.put<Contact>(`${this.route}/${id}`, formData);
  }

  delete(id: number): Observable<DeleteResponse> {
    return this.httpClient.delete<DeleteResponse>(`${this.route}/${id}`);
  }
}
