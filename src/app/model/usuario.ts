/* Clase para encapsular los atributos de una receta */
export class Usuario{
    id : number;
    
    nombre: string;
    apellidos: string;
    avatar: string;
    email:string;
    
    
    //Solo es posible un constructor 
    constructor( nombre:string='Anonimo'){
        
        console.log("Usuario constructor");
        this.id=-1;
        this.nombre=nombre;
        this.apellidos='';
        this.email='';
        this.avatar='assets/imgs/avatar.jpg';
       
       // this.apellidos=apellidos;
       
        
        
    }
    toString(){
        console.log(`Receta nombre = ${this.nombre}`);
    }

    
}