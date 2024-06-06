import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:8080/category"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}`)
  }

  getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}/${id}`)
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.baseUrl}`, category)
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.baseUrl}`, category)
  }

  deleteCategory(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
  }
}
