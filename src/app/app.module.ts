import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
//Nuestro Modylo para routing
import {AppRouter} from './app.route';
import { RoundPipe } from './pipes/round.pipe';
import {FilterPipe} from './pipes/flter.pipe';
import { FilterRecetas } from './pipes/filter-receta.pipe';
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
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { FormularioCocheComponent } from './concesionario/formulario-coche/formulario-coche.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';

import {HttpClientModule,HttpClient} from  '@angular/common/http';
import {TodosService} from './providers/todos.service';
import { FormBasicoComponent } from './form-basico/form-basico.component';
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
    FilterPipe,FilterRecetas, RecetarioComponent, RecetadetalleComponent, ListaComponent, FormularioComponent, FormularioCocheComponent, PlantillaComponent, TodosComponent, FormBasicoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [HttpClientModule,CochesService,RecetasService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
