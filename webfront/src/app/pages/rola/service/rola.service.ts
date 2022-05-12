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

  public addRola(titulo: string, duration: number, idAutor: number): void {
    let body = {
      titulo: titulo,
      duracion: duration,
      autor: {
        id: idAutor,
      },
    };

    this.http.post<Rola>(this.apiUrl, body).subscribe((val) => {
      console.log(val);
    });
  }

  public updateRola(
    titulo: string,
    duration: number,
    idAutor: number,
    idRola: string
  ): void {
    let body = {
      titulo: titulo,
      duracion: duration,
      autor: {
        id: idAutor,
      },
    };
    this.http.post<Rola>(`${this.apiUrl}${idRola}`, body).subscribe((val) => {
      console.log(val);
    });
  }

  public delteRola(id: number): void {
    this.http.delete(`${this.apiUrl}${id}`).subscribe((val) => {
      console.log(val);
    });
  }
}
