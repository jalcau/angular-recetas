/* Clase para encapsular los atributos de una receta */
export class Receta{
    nombre : string;
    
    descripcion: string;
    likes: number;
    imagen: string;
    isGlutenFree: boolean;
    cocinero:string;
    show: boolean;
    ingredientes: string[];
    //Solo es posible un constructor 
    constructor(nombre:string, cocinero:string='Anonimo'){
        
        console.log("Receta constructor");
        this.nombre=nombre;
        this.imagen='assets/imgs/receta_default.jpg';
        this.likes=0;
        this.cocinero=cocinero;
        this.descripcion='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum porro quam ipsam inventore architecto cumque unde ea? Aspernatur aut hic necessitatibus quam id accusamus impedit nihil quisquam dolorem recusandae.';
        this.isGlutenFree= false;
        this.ingredientes =[];
        
        
    }
    toString(){
        console.log(`Receta nombre = ${this.nombre}`);
    }

    addIngredientes (ingrediente : string){
        this.ingredientes.push(ingrediente);
    }
}