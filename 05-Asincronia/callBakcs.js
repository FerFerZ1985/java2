
// Call Back: Funciones que tiene como argumento otra funcion. Se ejetua despues de que se complete alguna operacion.

// const obtener = (nombre, miFuncion) => {
//     console.log('obteniendo datos...');

//     miFuncion(nombre);
// }

// obtener('Jorge',(nombre) => {console.log(`Mi nombre es: ${nombre}`)});


//EJEMPLO PRACTICO
const obtenerImagenes = (usuario, callBack) => {
    console.log(`Obteniendo imagenes del usuario ${usuario}...`);
    let img = ['IMG1', 'IMG2','IMG3'];
    
    callBack(img);
}

obtenerImagenes('Jorge', (img) => {
    console.log(img)
});