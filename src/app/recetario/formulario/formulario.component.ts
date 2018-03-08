import { Component, OnInit } from '@angular/core';

import { RecetasService } from '../../providers/receta.service';
/*****************
 *  npm install --save-dev jquery
 * 
 * *******************************************************
 */
import * as $ from 'jquery'
import { Detalle } from '../../model/detalle';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;
  ingredientes : FormArray;

  constructor(private fb:FormBuilder, private recetaService: RecetasService) {
    console.log("FormularioComponent constructor");
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
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
      imagen: ['assets/imgs/receta_default.jpg',Validators.required],
      descripcion:['',[Validators.minLength(100)]],
      gluten:["true",Validators.required],
      ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])
    });

  }
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }
  clickOtroIngrediente(){
    console.log('FormularioComponent clickOtroIngrediente');    
    this.ingredientes.push( this.createIngredienteFormGroup() );
  }

  clickEliminarIngrediente( index ){
    console.log('FormularioComponent clickEliminarIngrediente');    
    this.ingredientes.removeAt(index);
  }


  sumitar(): void{
    console.log("FormularioComponent onSubmit");
// TODO recoger datos formulario
  let nombre= this.formulario.value.nombre;
  let cocinero= this.formulario.value.cocinero;
  let imagen= this.formulario.value.imagen;
  let descripcion=this.formulario.value.descripcion;
  let isGlutenFree = (this.formulario.value.gluten === "true")?false:true;
  let receta= new Detalle(nombre,cocinero,imagen,descripcion,0,isGlutenFree)
  this.recetaService.crear(receta);
  this.formulario.value.ingredientes.map(element => {
    receta.addIngredientes( element.nombre );
  });

  //this.reset("")

//cerrar modal
//$("#modalReceta")
$(".close").click();
  }

}
