import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  admin: boolean;
  constructor() {
    console.log("Constructor plantilla");
    this.admin=true;
   }

  ngOnInit() {
    console.log("ngOnit plantilla");
  }

  switchUser():void{
    this.admin=!this.admin;
  }

}
