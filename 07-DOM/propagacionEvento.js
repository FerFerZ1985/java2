// Bubbling (false por defecto): El elemento hijo reacciona primero y despues el evento del elemento padre
// Capturing (true): El elemento padre reacciona primero y despeus el elemento hijo

const contenedor = document.getElementById('contenedor');
contenedor.addEventListener('click', () => {
    console.log('Hiciste click en el contenedor');
}, false);

const box = document.querySelector('.box');
box.addEventListener('click', () => {
    console.log('Hiciste click en la caja');
})