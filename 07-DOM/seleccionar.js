
//?  getElementById: Permite obtener un elemento en base a su atributo id.
const contenedor1 = document.getElementById('contenedor');
console.log(1);



//?  getElementsByTagName: Permite obtener una colección de elementos en base a la etiqueta. 
const divs = document.getElementsByTagName('div');
console.log(divs);



//?  getElementsByClassName: Permite obtener una colección de elementos segun su clase CSS. 
const contenedor2 = document.getElementsByClassName('contenedor');
console.log(contenedor2);



//?  querySelector: Obtiene el primer elemento que coincida con un selector CSS.
const box1 = document.querySelector('#contenedor .box');
console.log(box1);



//? querySelectorAll: Obtiene una colección de elementos en base a un selector CSS.
const boxs = document.querySelectorAll('#contenedor .box');
console.log(boxs);

boxs.forEach((box) => {
    console.log(box);
});




// METODOS CONCATENADOS

const contenedor = document.getElementById('contenedor');
const box = document.querySelector('#contenedor .box');


//? children: Permite obtener los elementos hijo
    console.log(contenedor.children);

//? parentElement: Permite obtener el elemento padre de un elemento
    console.log(contenedor.parentElement);

//? firstElementChild y lastElementChild: Primer y ultimo hijo
    console.log(contenedor.firstElementChild);
    console.log(contenedor.lastElementChild);


//? previousElementSibling y nextElementSibling: Hermano directo anterior o siguiente
    console.log(box.previousElementSibling);
    console.log(box.nextElementSibling);


//? closest: Nos permite buscar de adentro hacia afuera en busca de un elemento
    console.log(box.closest('.contenedor-principal'));
