import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//Nuestro Modylo para routing
import {AppRouter} from './app.route';
import { RoundPipe } from './pipes/round.pipe';
import {FilterPipe} from './pipes/flter.pipe';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page04Component } from './page-04/page-04.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/receta.service';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetadetalleComponent } from './recetario/recetadetalle/recetadetalle.component';
import { ListaComponent } from './recetario/lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page04Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,  
    FilterPipe, RecetarioComponent, RecetadetalleComponent, ListaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [CochesService,RecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
