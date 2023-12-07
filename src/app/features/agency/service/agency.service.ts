import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { Agency } from '../../../core/models/Agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private apiService: ApiService) {}

  getAll(): Observable<Agency[]> {
    return this.apiService.get<Agency[]>('/v1/agency/');
  }

  getById(id: number): Observable<Agency> {
    return this.apiService.get<Agency>(`/v1/agency/${id}`);
  }

  create(agency: Agency): Observable<Agency> {
    return this.apiService.post<Agency>('/v1/agency/', agency);
  }

  update(id: number, agency: Agency): Observable<Agency> {
    return this.apiService.put<Agency>(`/v1/agency/${id}`, agency);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/v1/agency/${id}`);
  }
}
