
const btnAgregar = document.getElementById('btn1');
const btnEliminar = document.getElementById('btn2');
const box = document.querySelector('.box');

const toggleClass = () =>{
    box.classList.toggle('active');
}

btnAgregar.addEventListener('click', () =>{
    console.log('Agregado evento');
    box.addEventListener('click', toggleClass);
})

btnEliminar.addEventListener('click', () =>{
    console.log('Evento eliminado');
    box.removeEventListener('click', toggleClass);
})
