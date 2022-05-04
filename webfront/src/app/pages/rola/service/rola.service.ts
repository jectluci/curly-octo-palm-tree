import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rola } from '../interface/rola';

@Injectable({
  providedIn: 'root',
})
export class RolaService {
  private apiUrl = 'http://localhost:8080/rola/';
  constructor(private http: HttpClient) {}

  public getAllRolas(): Observable<any> {
    return this.http.get<Rola>(this.apiUrl);
  }
}
