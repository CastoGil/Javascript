
alert("Bienvenido a Anses")

//calcular edad promedio de personas registradas//

let cantidadPersonas=Number(prompt("ingrese cantidad de Personas a Registrar"))
let promedio=0

//Iniciamos el Ciclo de las cantidad de personas//
function nombres() {
    nombre_de_Usuario = []
    let cont = " "
    let nombreUsuario
    
    for (let i = 0; i < cantidadPersonas; i++) {
    const nombreUsuario=prompt("ingrese nombre de Usuario")
    nombre_de_Usuario.push(nombreUsuario)
    const edadUsuario=Number(prompt("ingrese la edad del usuario"))
    promedio= promedio + edadUsuario;
    cont += nombre_de_Usuario[i] + " ";
}   console.log(nombre_de_Usuario)
}
nombres()

//Funcion flecha para calcular el promedio de la edad de las personas registradas//
const EdadPromedio = (promedio,cantidadPersonas) => {
    let edad = (promedio/cantidadPersonas)
    return (edad) 
}

//Mostramos por Alert//
let edad = EdadPromedio(promedio,cantidadPersonas).toFixed(2)
alert( " el promedio de edad de las personas registradas es "+ edad)




