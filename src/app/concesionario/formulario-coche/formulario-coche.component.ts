import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Coche} from '../../model/coche';
import {CochesService} from '../../providers/coches.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-formulario-coche',
  templateUrl: './formulario-coche.component.html',
  styleUrls: ['./formulario-coche.component.scss']
})
export class FormularioCocheComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb:FormBuilder,private recetaService: CochesService) { 
    console.log("FormularioComponent constructor");
    this.crearFormulario();
  }

  ngOnInit() {
    console.log("ngOnInit constructor");
  }
  crearFormulario(): void{
    console.log("FormularioComponent crearFormulario");
    this.formulario=this.fb.group({
      marca: ['',[Validators.required]],
      modelo: ['',[Validators.required]],
      version: ['',],
      puertas:['3p'],
      consumo:['7.2l'],
      caballos:['100 c.v']







    });
  }

  sumitar(): void{
    console.log("FormularioComponent onSubmit");
  }
}
