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





