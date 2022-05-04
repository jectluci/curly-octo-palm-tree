import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Rola } from './interface/rola';
import { RolaService } from './service/rola.service';

@Component({
  selector: 'app-rola',
  templateUrl: './rola.component.html',
  styleUrls: ['./rola.component.scss'],
})
export class RolaComponent implements OnInit {
  rolas!: Rola[];

  constructor(private rolaSvc: RolaService) {}

  ngOnInit(): void {
    this.rolaSvc
      .getAllRolas()
      .pipe(tap((rolas: Rola[]) => (this.rolas = rolas)))
      .subscribe();
  }
}
