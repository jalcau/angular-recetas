import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import{RecetaComponent} from './receta/receta.component';
import{PropiedadesComponent} from './propiedades/propiedades.component';
import{Page04Component} from './page-04/page-04.component';
import{HomeComponent} from './home/home.component';
import{UsuarioComponent} from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';

 const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path:'home',component: HomeComponent},
    { path:'usuario', component: UsuarioComponent},
    { path:'concesionario', component: ConcesionarioComponent},
    { path: 'receta', component: RecetaComponent },
    { path: 'propiedades',component: PropiedadesComponent },
    { path: '**', component: Page04Component },

   
   
    
  ];

  export const  AppRouter = RouterModule.forRoot(appRoutes);