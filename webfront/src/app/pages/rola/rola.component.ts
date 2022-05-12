import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Autor } from '../autor/interface/autor.interface';
import { AutorService } from '../autor/services/autor.service';
import { Rola } from './interface/rola';
import { RolaService } from './service/rola.service';

@Component({
  selector: 'app-rola',
  templateUrl: './rola.component.html',
  styleUrls: ['./rola.component.scss'],
})
export class RolaComponent implements OnInit {
  rolas!: Rola[];
  autores!: Autor[];

  modelo = {
    id: '',
    titulo: '',
    duration: '',
    autor: '',
  };

  constructor(private rolaSvc: RolaService, private autorSvc: AutorService) {}

  ngOnInit(): void {
    this.rolaSvc
      .getAllRolas()
      .pipe(tap((rolas: Rola[]) => (this.rolas = rolas)))
      .subscribe();
    this.autorSvc
      .getAllAutores()
      .pipe(tap((autores: Autor[]) => (this.autores = autores)))
      .subscribe();
  }

  addRola(form: any): void {
    if (this.modelo.id !== '') {
      this.rolaSvc.updateRola(
        form.value.titulo,
        form.value.duration,
        form.value.autor,
        this.modelo.id
      );
    } else {
      this.rolaSvc.addRola(
        form.value.titulo,
        form.value.duration,
        form.value.autor
      );
    }
  }

  updateRola(rola: any): void {
    this.modelo.id = rola.id;
    this.modelo.titulo = rola.titulo;
    this.modelo.duration = rola.duracion;
    this.modelo.autor = rola.autor.id;
  }

  deleteRola(id: number): void {
    this.rolaSvc.delteRola(id);
  }
}
