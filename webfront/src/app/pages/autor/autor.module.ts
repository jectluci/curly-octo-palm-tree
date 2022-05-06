import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorComponent } from './autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AutorComponent],
})
export class AutorModule {}
