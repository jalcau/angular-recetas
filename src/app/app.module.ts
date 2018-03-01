import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Nuestro Modylo para routing
import {AppRouter} from './app.route';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page04Component } from './page-04/page-04.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page04Component,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
