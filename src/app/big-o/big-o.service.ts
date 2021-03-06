import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BigOService {

  constructor(private http: HttpClient) { }

  getBigO(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/bigO')
  }
}

