import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any[]> {
    console.log(this.http.get<any[]>(`http://localhost:8000/budget/get_detail_budget_data/${id}`))
    return this.http.get<any[]>(`http://localhost:8000/budget/get_detail_budget_data/${id}`);
  }
}