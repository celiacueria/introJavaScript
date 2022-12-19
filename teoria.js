//IF 
//if(diego es mayor a 18 años){
//   puede conducir
//}
let edadSujeto = 18;
const nombre="Celia";

function validarEdad(edad){
if(edad>18){
    return(nombre+( "puede conducir"));
}else{
    return(nombre+"no puede conducir")
}

}

console.info(validarEdad(edadSujeto))

//Bucle iterar varias veces