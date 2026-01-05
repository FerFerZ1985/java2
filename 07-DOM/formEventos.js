
const formulario = document.forms['form-registro'];

// Submit: Permite detectar cuando se enviar un formulario.
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('Datos enviados');
});


// Change: Se ejecuta cuando cambia un valor y se da click fuera.
formulario.pais.addEventListener('change', () =>{
    console.log('Ocurrio un cambio');
});


// Focus: Permite detectar cuando un input recibe el foco de atención. 
// Blur: Permite detectar cuando un input pierde el foco de atención.
formulario.username.addEventListener('focus', () =>{
    console.log('El input esta activado en este momento');
});

formulario.username.addEventListener('blur', () =>{
    console.log('El input esta activado en este momento');
});



// keydown: Permite detectar cuando una tecla es presionada sobre un input.
// keyup: Permite detectar cuando una tecla es levantada al escribir sobre un input.
formulario.username.addEventListener('keyup', (e) =>{
    // console.log(e);
    console.log('Una tecla fue presionada: ' + e.key);
});