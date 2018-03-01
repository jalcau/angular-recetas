import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import{RecetaComponent} from './receta/receta.component';
import{PropiedadesComponent} from './propiedades/propiedades.component';
import{Page04Component} from './page-04/page-04.component';
import{HomeComponent} from './home/home.component';

 const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path:'home',component: HomeComponent},
    { path: 'receta', component: RecetaComponent },
    { path: 'propiedades',component: PropiedadesComponent },
    { path: '**', component: Page04Component }
   
    
  ];

  export const  AppRouter = RouterModule.forRoot(appRoutes);