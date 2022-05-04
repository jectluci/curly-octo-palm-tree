import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './pages/autor/autor.component';
import { RolaComponent } from './pages/rola/rola.component';

const routes: Routes = [
  { path: 'autores', component: AutorComponent },
  { path: 'rolas', component: RolaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
