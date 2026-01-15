
//? XMLHttpRequest es un objeto en JavaScript que permite a los desarrolladores hacer solicitudes HTTP para intercambiar datos entre un cliente y un servidor sin recargar la página web. 

// PASO 1 Crear una instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// PASO 2 Configurar la petición
xhr.open('GET', '10Ajax/data.json');

// PASO 3 Enviar la petición. 
xhr.send();


// PASO 4 Manejar la respuesta
/*
Estados de readyState
        1: Conexión con el servidor establecida.
        2: Petición recibida.
        3: Procesando petición.
        4: Petición finalizada y respuesta lista.
*/


xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.responseText));
        }else{
            console.error(xhr.status);
        }
    }
});


// console.log(xhr);