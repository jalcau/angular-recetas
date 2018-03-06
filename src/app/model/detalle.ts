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
        cocinero: string = 'Anonimo',//valor por defecto para 'undefined' o sin parametro
        imagen?: string,
        descripcion?:string,
        
    ){

        console.log('Receta constructor');
       // this.id = -1;
        this.nombre = nombre;
        this.imagen = imagen;
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsum repellat consectetur deserunt doloribus sequi explicabo laudantium, deleniti, id totam, neque laborum debitis quia doloremque officiis incidunt labore ut.';
        this.isGlutenFree = false;
        this.ingredientes = [];

    }
        
        
    
    toString(){
        console.log(`Receta nombre = ${this.nombre}`);
    }

    addIngredientes (ingrediente : string){
        this.ingredientes.push(ingrediente);
    }
}