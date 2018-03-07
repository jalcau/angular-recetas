import { Component, OnInit } from '@angular/core';

import { RecetasService } from '../../providers/receta.service';
/*****************
 *  npm install --save-dev jquery
 * 
 * *******************************************************
 */
import * as $ from 'jquery'
import { Detalle } from '../../model/detalle';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;

  constructor(private fb:FormBuilder, private recetaService: RecetasService) {
    console.log("FormularioComponent consatructor");
    this.crearFormulario();
   }

  ngOnInit() {
    console.log("FormularioComponent ngOnit");

  }

  crearFormulario(): void{
    console.log("FormularioComponent crearFormulario");
    this.formulario=this.fb.group({
      //FormControl(input) =>['value',[Validaciones]]
      nombre: ['',[Validators.required, Validators.minLength(2)]],
      cocinero: ['',[Validators.minLength(5)]],
      imagen: ['assets/imgs/receta_default.jpg'],
      descripcion:['',[Validators.minLength(25)]]
    });

  }

  sumitar(): void{
    console.log("FormularioComponent onSubmit");
// TODO recoger datos formulario
  let nombre= this.formulario.value.nombre;
  let cocinero= this.formulario.value.cocinero;
  let imagen= this.formulario.value.imagen;
  let descripcion=this.formulario.value.descripcion;
  let receta= new Detalle(nombre,cocinero,'assets/imgs/receta_default.jpg',descripcion)
  this.recetaService.crear(receta);


//cerrar modal
//$("#modalReceta")
$(".close").click();
  }

}
