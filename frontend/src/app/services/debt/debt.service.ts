import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debt } from '../../models/debt';


@Injectable({
  providedIn: 'root'
})
export class DebtService {
  baseUrl = "http://localhost:8080/debt"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Debt[]> {
    return this.httpClient.get<Debt[]>(`${this.baseUrl}`)
  }

  getDebtById(id: number): Observable<Debt> {
    return this.httpClient.get<Debt>(`${this.baseUrl}/${id}`)
  }

  createDebt(debt: Debt): Observable<Debt> {
    return this.httpClient.post<Debt>(`${this.baseUrl}`, debt)
  }

  updateDebt(debt: Debt): Observable<Debt> {
    return this.httpClient.put<Debt>(`${this.baseUrl}`, debt)
  }  

  deleteDebt(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
  }
}
