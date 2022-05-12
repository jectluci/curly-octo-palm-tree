import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolaComponent } from './rola.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RolaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RolaComponent],
})
export class RolaModule {}
