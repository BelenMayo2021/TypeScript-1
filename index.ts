console.log("Me imprime en consola");

//Variables

let nombre: string = 'Santiago'
let persona: number = 100;
let booleano: boolean = false;

console.log(nombre);
console.log(persona);
console.log(booleano);


//interfaces

//Una pequeña configuracion de los objetos

interface Personaje{
    nombre: string;
    pv: number;
    habilidades: string [];
    ciudad?: string //éste atributo es opcional

}


//Objeto plano

const personaje: Personaje = {
    nombre: 'Aquaman',
    pv: 100,
    habilidades: ['Nadar', 'Fuerza', 'Agilidad' ]
}

console.log(personaje);




/* //Variables
let nombre:string = "Pepe";
let persona:number = 25;
let apellido: string | number = 25
let ganar:boolean = false;

 */

//Interfaces
interface Personaje {
    nombre:string;
    pv:number;
    habilidades:string[];
    ciudad?: string ; //dato optativo 
}


/* 
//Objetos
const personaje: Personaje = {
    nombre:'Aquaman',
    pv:100,
    habilidades:['Agua','Rayo']
}
personaje.ciudad = 'Buenos Aires';
console.table(personaje);

 */



//Funciones
function sumar(num1:number, num2:number) {
    return num1 + num2;
}
const sumarA = (num1:number ,num2:number)=>{
    return num1 + num2
}
const resultado = sumar(100,300);
console.log(resultado);
 function multiplicar(a:number, b:number, c?:number):number { // function name ():number -> quiere decir que el resultado debe ser si o si number.Tipamos el resultado
    /* return a * b * c;     va a marcar el c para avisarnos que puede generar un error, ya que al hacer esa funcion, en caso que no sea un number el parametro c, va a dar error.*/
    return a * b;
}
 //Funciones a la interfaces
interface personajeJuego{
    nombre:string;
    pv:number;
    mostrarPv:()=> void;
}





//Objeto tipo personajeJuego
const nuevoPersonaje : personajeJuego = {
    nombre:'Goku',
    pv:80,
    mostrarPv: ():void =>{
        console.log(`${nuevoPersonaje.nombre} tiene ${nuevoPersonaje.pv} puntos de vida `);
    }
}
nuevoPersonaje.nombre
function curarPersonaje( personaje: personajeJuego  , curar: number){
    personaje.pv += curar;
    console.log(`${personaje.nombre} ha sido curado con ${curar} puntos de vida y ahora tiene ${personaje.pv}`);
}
curarPersonaje(nuevoPersonaje, 20)
console.log(nuevoPersonaje.mostrarPv());
console.log(nuevoPersonaje);




//Clases 
class Veterinario{
    public nombre: string = 'Pedro';
    public apellido: string = 'Perez';
    private salario: number = 1500;
    static apodo: string = 'Mi apodo'
}
const Veterinario1 = new Veterinario();