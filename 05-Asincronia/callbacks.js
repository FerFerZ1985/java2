// Callback: Funciones que tienen como argumento otra funcion, Se ejecuta despeus de que se complete alguna operacion



// EJEMPLO PRACTICO

const obtenerImagenes = (usuario, callback) => {
    console.log(`Obteniendo imagenes del usuario ${usuario}...`);
    let img = ['IMG1', 'IMG2', 'IMG3']

    callback(img);
}

obtenerImagenes('Jorge', (img) => {
    console.log(img)}
);