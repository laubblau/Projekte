import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Transaction} from "../../models/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = "http://localhost:8080/transaction"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.baseUrl}`)
      .pipe(
        map(transactions => transactions.map(transaction => ({
          ...transaction,
          date: new Date(transaction.date) // Parse date string into Date object
        })))
      );
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`${this.baseUrl}/${id}`)
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.baseUrl}`, transaction)
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.put<Transaction>(`${this.baseUrl}`, transaction)
  }

  deleteTransaction(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
  }
}
