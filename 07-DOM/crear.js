
/*
    ? PASO 1. Crear el elemento 
        createElement: Recibe como parametro una cadena de texto con la etiqueta que queremos crear.

    ? PASO 2. Agregar texto y atributos

    ? PASO 3. Agregar elemento al DOM 
        FORMA #1: .appendChild() - Agrega un elemento al final
        FORMA #2: .insertAdjacentElement() - Permite agregar un elemento segun se especifique 
        FORMA #3: .replaceWith() - Permite remplazar el elemento por otro
*/


//*  PASO 1. Crear el elemento 
const nuevoElemento = document.createElement('div');


//* PASO 2. Agregar texto y atributos
nuevoElemento.innerHTML = 'Nuevo';
nuevoElemento.setAttribute('class', 'box active');


//* PASO 3. Agregar elemento al DOM 
const contenedor = document.getElementById('contenedor');

    // FORMA #1
    contenedor.appendChild(nuevoElemento);


    // FORMA #2
        //?    afterbegin - como primer elemento
        //?    beforebegin - antes del elemento padre
        //?    beforeend - como ultimo elemento
        //?    afterend -  despues del elemento padre
    
        contenedor.insertAdjacentElement('afterend', nuevoElemento);

    // FORMA #3
    const box = document.querySelector('#contenedor .box');
    box.replaceWith(nuevoElemento);