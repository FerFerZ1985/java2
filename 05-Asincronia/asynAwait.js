// Asyn & Away - Son una forma diferente de trabajar con las promesas. permite indicar que el codigo se ejecute de forma secuencial

const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const frutas = ['Manzana', 'Naranja', 'Limon'];
        const respuesta = false;
        if(respuesta === true){
            resolve(frutas);
        }else{
            reject('Existe un error');
        }
        }, 1500)
    });
}


const mostrarDatos = async() => {
    try{
        console.log(await obtenerDatos())
    }catch(error){
        console.log(error);
    }
}

mostrarDatos()
// console.log('Iniciando proceso')
// obtenerDatos()
//     .then((frutas) => {
//         console.log(frutas)
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// console.log('Finalizo el proceso')
