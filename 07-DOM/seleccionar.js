// // getElementById: Permite obtener un elemento en base a su atributo id.
// const contenedor = document.getElementById('contenedor');
// console.log(contenedor);

// // getElementsByTagName: Permite obntener una coleccion de elementos segun la etiqueta
// const div = document.getElementsByTagName('div')
// console.log(div);

// // getElementByClassName Permite obetner una coleccion de elementos segun su clase de CSS
// const box = document.getElementsByClassName('box');
// console.log(box);

// querySelector: Obtiene el primer elemento que coincida con un selector CSS
// const box = document.querySelector('#contenedor .box');
// console.log(box);

// querySelectorAll: Obtiene una coleccion de elementos en base a un selector CSS
// const boxs = document.querySelectorAll('#contenedor .box');
// console.log(boxs);

// boxs.forEach((box) => {
//     console.log(box);
// })

// children: Permite obtener los elementos hijo
const box = document.querySelector('#contenedor .box')
// console.log(contenedor.children);

// parentElement: Permite obtener el elemento padre de un elemento
// console.log(contenedor.parentElement);

// firstElementChild y lastElementChild: primer y ultimo hijo
// console.log(contenedor.firstElementChild);
// console.log(contenedor.lastElementChild);

//previousElementSibling y nextElementSibling: hermano directo anterior o siguiente
// console.log(box.nextElementSibling);
// console.log(box.previousElementSibling);

// closest: permite buscar el elemento mas cercano de adentro hacia afuera
console.log(box.closest(' .contenedor-principal'));