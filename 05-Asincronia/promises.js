
//Promesas - Estrcutura que le indica al navegador que espere a q termine una tarea. Al finalizarla responde con los datos


// const promesa = new Promise((resolve, reject) => {
//     const respuesta = false;

//     if(respuesta){
//         resolve('Fue exitoso');
//     }else{
//         reject('Existe un error');
//     }

// });

 promesa.then((mensaje) => {
    console.log(mensaje);
 });    

 promesa.catch((error) => {
    console.log(error);
 })

/**
        *EJERCICIO: Crear una funcion que teome una promesa
            -La cual si la respuesta es true muestra un arreglo de frutas/nombres/etc.
            -Si la respuesta es false envia un mensaje de error.  
 */

const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        const frutas = ['Manzana', 'Naranja', 'Limon'];
        const respuesta = true;

        if(respuesta === true){
            resolve(frutas);
        }else{
            reject('Existe un error');
        }
    });
}

obtenerDatos()
    .then((frutas) => {
        console.log(frutas)
    })
    .catch((error) => {
        console.log(error)
    });
