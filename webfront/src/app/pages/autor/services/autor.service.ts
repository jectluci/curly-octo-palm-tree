import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interface/autor.interface';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private apiUrl = 'http://localhost:8080/autor/';
  constructor(private http: HttpClient) {}
  public getAllAutores(): Observable<any> {
    return this.http.get<Autor>(this.apiUrl);
  }
}
