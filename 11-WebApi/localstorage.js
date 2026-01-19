
//? Almacenamiento local: Permite guardar valores de texto de hasta 5mb. Se pueden guardar tokens de usuario o preferencias.

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// Crear LocalStorage
btn1.addEventListener('click', () =>{
    const nombre = prompt('Escribe tu nombre');
    window.localStorage.setItem('usuario-nombre', nombre);
});

// Eliminar LocalStorage
btn2.addEventListener('click', () =>{
    window.localStorage.removeItem('usuario');
});

// Mostrar LocalStorage
console.log('Hola ' + window.localStorage.getItem('usuario-nombre'));
