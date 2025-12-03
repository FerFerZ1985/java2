// Parametro Rest - Permite que una funcion tenga un numero indefinido de argumentos.

const datosUsuario = ( ...datosFuncion) => {
    console.log(datosFuncion);
}

datosUsuario('Fernando', 35, 'correo@correo.com', 'codigo creativo', 'JavaScript desde cero', '12345', 12697)