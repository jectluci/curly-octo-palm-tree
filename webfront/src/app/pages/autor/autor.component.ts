import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Autor } from './interface/autor.interface';
import { AutorService } from './services/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {
  autors!: Autor[];

  modelo = {
    id: '',
    nombre: '',
  };
  constructor(private autorSvc: AutorService) {}

  ngOnInit(): void {
    this.autorSvc
      .getAllAutores()
      .pipe(tap((autors: Autor[]) => (this.autors = autors)))
      .subscribe();
  }
  agregarAutor(form: any): void {
    if (this.modelo.id !== '') {
      this.autorSvc.updateAutor(form.value.nombre, this.modelo.id);
    } else {
      this.autorSvc.addAutor(form.value.nombre);
    }
  }

  updateAutor(autor: any): void {
    this.modelo.id = autor.id;
    this.modelo.nombre = autor.nombre;
  }
  deleteAutor(id: number): void {
    this.autorSvc.deleteAutor(id);
  }
}
