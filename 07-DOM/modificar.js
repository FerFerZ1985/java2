
const box = document.querySelector('.box');

//? .style.propiedad: Permite cambiar los estilos CSS de un elemento
box.style.background = '#000';
box.style.color = '#fff';
box.style.fontSize = '30px';



//? classList - Accede a la lista de clases de un elemento.
console.log(box.classList)


// classList.add() - Agrega clases a un elemento.
box.classList.add('active');



// classList.remove() - Elimina clases de un elemento
box.classList.remove('active');



// classList.toggle() - Permite alternar clases
box.classList.toggle('active');


// classList.contains() - Comprueba si el elemento contiene una clase
box.classList.contains('active');
