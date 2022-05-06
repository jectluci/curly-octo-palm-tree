import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interface/autor.interface';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private apiUrl = 'http://localhost:8080/autor/';
  constructor(private readonly http: HttpClient) {}
  public getAllAutores(): Observable<any> {
    return this.http.get<Autor[]>(this.apiUrl);
  }
  public addAutor(nombre: string): void {
    this.http
      .post<Autor>(this.apiUrl, {
        nombre: nombre,
      })
      .subscribe((val) => {
        console.log(val);
      });
  }
  public updateAutor(nombre: string, id: string): void {
    console.log(nombre, id);
    this.http
      .post<Autor>(`${this.apiUrl} ${id}`, {
        nombre: nombre,
      })
      .subscribe((val) => {
        console.log(val);
      });
  }
  public deleteAutor(id: number): void {
    this.http.delete(`${this.apiUrl}${id}`).subscribe((val) => {
      console.log(val);
    });
  }
}
