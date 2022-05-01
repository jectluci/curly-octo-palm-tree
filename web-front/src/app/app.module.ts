import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolaComponent } from './pages/rola/rola.component';
import { AutorComponent } from './pages/autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    RolaComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
