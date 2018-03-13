import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
// atributo FormGroup para usar en el HTML =>
export class FormBasicoComponent implements OnInit {
  //formGroup="formulario"
  formulario:FormGroup;
  fruta:string;

  constructor(private fb: FormBuilder) { 
    this.fruta="banana";


    this.formulario = this.fb.group({
      //nombre => control= input
      nombre : ['', [Validators.required,Validators.minLength(3)]]
    });


  }

  ngOnInit() {
  }
  enviar(){
    console.log("enviar formulario")
  }

}
