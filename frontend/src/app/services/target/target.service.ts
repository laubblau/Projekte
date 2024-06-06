import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Target } from '../../models/target';

@Injectable({
  providedIn: 'root'
})
export class TargetService {
  baseUrl = "http://localhost:8080/target"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Target[]> {
    return this.httpClient.get<Target[]>(`${this.baseUrl}`)
  }

  getTargetById(id: number): Observable<Target> {
    return this.httpClient.get<Target>(`${this.baseUrl}/${id}`)
  }

  createTarget(target: Target): Observable<Target> {
    return this.httpClient.post<Target>(`${this.baseUrl}`, target)
  }

  updateTarget(target: Target): Observable<Target> {
    return this.httpClient.put<Target>(`${this.baseUrl}`, target)
  }

  deleteTarget(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
  }
}
