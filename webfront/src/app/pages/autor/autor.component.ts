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
  constructor(private autorSvc: AutorService) {}

  ngOnInit(): void {
    this.autorSvc
      .getAllAutores()
      .pipe(tap((autors: Autor[]) => (this.autors = autors)))
      .subscribe();
  }
}
