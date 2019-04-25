import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailyTaskService {

  constructor(private http: HttpClient) { }

  getDailies(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/daily')
  }

}
