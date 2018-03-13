import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import{RecetaComponent} from './receta/receta.component';
import{PropiedadesComponent} from './propiedades/propiedades.component';
import{Page04Component} from './page-04/page-04.component';
import{HomeComponent} from './home/home.component';
import{UsuarioComponent} from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import {RecetarioComponent} from './recetario/recetario.component';
import {PlantillaComponent} from './plantilla/plantilla.component';
import {TodosComponent} from './todos/todos.component';
import  {FormBasicoComponent } from './form-basico/form-basico.component';

 const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path:'home',component: HomeComponent},
    { path:'usuario', component: UsuarioComponent},
    { path:'concesionario', component: ConcesionarioComponent},
    { path:'recetario', component:RecetarioComponent},
    { path:'plantilla',component:PlantillaComponent},
    { path:'todos', component:TodosComponent},
    { path:'form', component:FormBasicoComponent},
    { path: 'receta', component: RecetaComponent },
    { path: 'propiedades',component: PropiedadesComponent },
    { path: '**', component: Page04Component },
    

   
   
    
  ];

  export const  AppRouter = RouterModule.forRoot(appRoutes);