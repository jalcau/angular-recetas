import { Component, OnInit } from '@angular/core';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {



  usuario:Usuario;

  constructor() { 

  console.log('Constructor UsuarioComponent');
  this.usuario= new Usuario('Juan');

  }
  ngOnInit() {
  }

}
