//Variables
//Reserva de memoria, donde guardo informacion. La informacion puede cambiar (en tiempo de ejecucion)

//var
//<<<<<<< HEAD
//var name = "Adrian"
//=======
//var name = "Adrian";
//>>>>>>> de10f455c222cc84b07c405527a8a356c7f1c24b

let number = 1;

//lets
let pet = "Dog";

//const
//const lastName = "Cordoba";

//-----------------------------------------------------------------------------------------------//

//var name = "Diego";

//Incremento y decremento
number++;
number--;

//concatenacion
//console.info("el nombre del facilitador " +  name + " " + "y tengo un " + pet)

//interpolacion
//console.info(`mi nombre es ${name} y tengo un ${pet}`)

//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.
//const name = "Celia";
const lastName = "Cueria";
const lastNameDos = "Barcia"
var age = 23;
var week = "Martes";
var day = "13";

console.info(`Mi nombre es ${name} ${lastName} ${lastNameDos} hoy es ${week} dia ${day} y tengo ${age} años`)


//-----------------------------------------------------------------------------------------------//

//Funciones>
//Una función es un bloque de instrucciones que puede ejecutarse tantas veces como desee.
//Una función puede tener parámetros y devolver un valor. Las funciones se pueden definir de diferentes
//maneras. Quizás la más común es la declaración de función. Comienza con la palabra clave function. Sigue:
//El nombre de la función,los parámetros encerrados entre paréntesis, las afirmaciones encerradas entre corchetes.

//Variables
let numeroA = 3;
let numeroB = 6;
let numeroZ = 7;

//<<<<<<< HEAD


function medirSuperficieCuadrado(longitudLado) {
    return longitudLado * longitudLado;
  }

var longitudLado = 6

var resultado = medirSuperficieCuadrado(longitudLado)

console.info(resultado)





//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//1
//Defina una función helloque devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.
function helloworld(message){
  return "Hello World";
}

var hello = helloworld()
console.info(hello)
//2
//Defina dos funciones.
//La primera función adebería devolver 'Hello a!'y la segunda función bdebería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.
function helloA(){
  return "Hello A";
}
var ejercicioA = helloA();
console.info(`Soy el ejercicio: ${ejercicioA}`)

function helloB(){
  return "Hello B";
}
var ejercicioB = helloB();
console.info(`Soy el ejercicio: ${ejercicioB}`)

//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greety asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.

function greet (){
  return "Heydo"
}
var salutation = greet();

console.info(`Soy el ejercicio 3: ${salutation}`)

//Parámetros

function give(input) {
  return input;
}
//Declarar funciones
function sumar(Numero1, Numero2) {
  return Numero1 + Numero2;
//>>>>>>> de10f455c222cc84b07c405527a8a356c7f1c24b
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

//llamar a las funciones
//console.info(sumar(3567, numeroA, numeroZ)); //10
//console.info(sumar(6, 15, numeroB)); //21 //hardcode - no lo hagan

//Parámetros
//definimos una función que simplemente devuelve el parámetro input. Los parámetros son variables.

//llamamos a la función y le pasamos el argumento 'apple'. La función será ejecutada.

//El argumento 'apple'se asignará al parámetro input. Input obtiene el valor 'apple'.
//La variable input se devuelve en la única línea de código de la función.
//Este retorno se asigna a la variable result. Finalmente, result tiene el valor 'apple'.




//CONDICIONALES ------- que son???

let edadDeRaul = 17;
let edadDeLucia = 20;
let edadDeCarlos = 89;
const nombre = "Raul";

function validarEdad(edad) {
  var edad
  var resultado
  switch (true) {
    
    case (edad>=18 && edad<70) :
     resultado = " puede conducir";
      break;
    case (edad>=70 && edad<=80):
      resultado = " deja la herencia y no conduzcas";
      break;
    case (edad>80):
      resultado = " deja la herencia y no conduzcas";
      break;
    default:
      resultado = " no puede conducir tampoco";
  }

  return resultado;
}

console.info(validarEdad(18));








//Bucles

//for repite la misma accion asta que sale del bucle

//horas trabajadas

for(let horas = 0; horas <= 40; horas++){
  console.info("llevas " + horas + " trabajadas")
}



//ARRAYS ------que son??? que funciones existen para manipular Arrays?


//Arrays [] lista o conjunto grupo de datos, los datos pueden ser de varios tipos.
//Declarar array clasificaciones con los siguientes nombres: Ana ...
let clasificaciones= ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
for( let i = 0; i<clasificaciones.length; i++){
  console.info(clasificaciones[i]);
}
//Celia adelanta a Raúl:
//Accedo a la posición del array y le cambio el valor
clasificaciones[2]="Celia";
clasificaciones[3]="Raúl";
for( let i = 0; i<clasificaciones.length; i++){
  console.info(clasificaciones[i]);
}

//Antonio es descalificado y se elimina del concurso

clasificaciones.splice(5, 1);

for( let i = 0; i<clasificaciones.length; i++){
  console.info(clasificaciones[i]);
}

//Detrás de Ana, y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden

clasificaciones.splice(1, 0, "Roberto", "Amaya")
for( let i = 0; i<clasificaciones.length; i++){
  console.info(clasificaciones[i]);
}

//Nueva participante que pasa a encabezar la clasificación: Marta

clasificaciones.unshift("Marta");
for( let i = 0; i<clasificaciones.length; i++){
  console.info(clasificaciones[i]);
}



//forEach atado a los Arrays
let listaDeNumeros= [5, 78, 24, 567]

listaDeNumeros.forEach(function(numero){

  if(numero < 50){
    console.info(numero)
  }
  console.info("numero mayor a 50 por eso no lo imprimo")
})

console.info(listaDeNumeros[3])


