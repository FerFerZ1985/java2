
// Ejemplo basico de Json
const datosJson = {
    "nombre": "Jorge",
    "apellido": "Durand",
    "lenguaje": "Javascript"
}

// console.log(datosJson);


// Serializar = convertir en texto
const datosEnviar = JSON.stringify(datosJson);
console.log(datosEnviar);

// Deserializar = convertir a formato json
const datosRecibir = JSON.parse(datosEnviar);
console.log(datosRecibir);