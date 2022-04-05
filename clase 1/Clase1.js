/*

Variables en JavaScript
const: variable constante un dato que no puede cambiar en el tiempo.
let: variable que puede cambiar en el tiempo.
var: variable global al proyecto.

Objetos en JavaScript
array = []
objeto = {}
array de objetos = [{}] como viene la informacion de una API o BDD
*/

console.log("hola mundo");

const persona = {
    nombre:'Jon',
    apellido:'Gibaut',
    edad:20,
    casado:false,
    hobbies: [
        {nombre:'tocar guitarra 🎸'},
        {nombre:'programar 🤓'},
        {nombre:'skate 🛹'}
    ]
};

console.log(persona.nombre);
if(persona.nombre === 'Jon'){
    console.log(persona.hobbies); 
}

let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
let signo = prompt("Ingrese el signo a ejecutar")

const suma = (num1, num2) => {
    const suma = num1+num2;
    alert("La suma de los dos numeros es: " + suma);
}
const resta = (num1, num2) => {
    const resta = num1-num2;
    alert("La resta de los dos numeros es: " + resta);
}
const mult = (num1, num2) => {
    const multiplicacion = num1*num2;
    alert("La multiplicacion de los dos numeros es: " + multiplicacion);
}
const dividir = (num1, num2) => {
    if(num2 === 0){
        alert("no se puede dividir por 0");
    }
    else{
    const division = num1/num2;
    alert("La division de los dos numeros es: " + division);
    }
}

signo === '+' ? suma(numero1, numero2) : null;
signo === '-' ? resta(numero1, numero2) : null;
signo === '*' ? mult(numero1, numero2) : null;
signo === '/' ? dividir(numero1, numero2) : null;

// if(signo === '+'){
//     suma(numero1, numero2);
// }
// else{
//     if(signo === '-'){
//         resta(numero1, numero2);
//     }
//     else{
//         if(signo === '*'){
//             mult(numero1, numero2);
//         }
//         else{
//             dividir(numero1, numero2);
//         }
//     }
// }

//funcion flecha: const nombreFuncion = (parametros) => {a ejecutar}

//hacer una calculadora suma (+), resta(-), dividir(/), multiplicar(*). Que se ejecute cada funcion dependiendo del signo que se ingrese en un prompt



