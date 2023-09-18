import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor(private http: HttpClient,
              private authService: AuthService) {}

  getData(id: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getAccessToken()}`
    });

  const requestOptions = { headers: headers };
  console.log(this.http.get<any[]>(`http://localhost:8000/budget/${id}`, requestOptions))
  return this.http.get<any[]>(`http://localhost:8000/budget/${id}`, requestOptions);
  }

  getAllData(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getAccessToken()}`
    });

  const requestOptions = { headers: headers };
  return this.http.get<any[]>('http://localhost:8000/budget/', requestOptions);
  }
}