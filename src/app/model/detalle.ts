/* Clase para encapsular los atributos de una receta */
export class Detalle{
    nombre : string;
    
    descripcion: string;
    likes: number;
    imagen: string;
    isGlutenFree: boolean;
    cocinero:string;
    show: boolean;
    ingredientes: string[];
    //Solo es posible un constructor 
    constructor( 
        nombre : string ,
        cocinero: string,//valor por defecto para 'undefined' o sin parametro
        imagen?: string,
        descripcion?: string,
        likes?: number,
        isGlutenFree?: boolean
    ){

        console.log('Receta constructor');
       // this.id = -1;
        this.nombre = nombre;
        this.imagen = imagen;
        this.likes = likes;
        this.cocinero = cocinero;
        this.descripcion = descripcion;
        this.isGlutenFree = isGlutenFree;
        this.ingredientes = [];

    }
        
        
    
    toString(){
        console.log(`Receta nombre = ${this.nombre}`);
    }

    addIngredientes (ingrediente : string){
        this.ingredientes.push(ingrediente);
    }
}