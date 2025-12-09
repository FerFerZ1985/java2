//ciclos for in - Permite recorrer las propiedades de un objeto o arreglos

const usuario = {
    nombre: 'Fer',
    edad: 40,
    pais: 'Argentina',
    puesto: 'Programador'
}

for (propiedades in usuario){
    console.log(propiedades);// Porpiedades
    console.log(usuario[propiedades]);//Valores

}

// Ciclo for of - Permite recorrer los valores de un objeto iterable

const frutas = ['Cereza', 'Manzana', 'Naranja', 'Limon', 'Melon', 'Kiwi', 'Banana', 'Kiwi'];

for (elemento of frutas){
    console.log(elemento);
}

// EJEMPLO CON NODOS
const etiquetasHTML = document.head.children;

for (elemento of etiquetasHTML){
    console.log(elemento);
}