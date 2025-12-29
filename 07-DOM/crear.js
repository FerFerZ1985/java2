/**\
    PASO 1 Crear el elemento
        createElement: Recibe como parametro una cadena de texto con la etiqueta que queremos crear

    PASO 2 Agregar texto y Atributos

    PASO 3 Agregar elemento al DOM
        Forma 1: .oppendChild() - agrega eun elemento al final
        Forma 2: .insertAdjacentElement() - Permite agregar un elemento segun se especifique
        Forma 3: .replaceWith() - Permite reemplazar el elemento por otro
 */

// PASO 1. Crear el elemento
const nuevoElemento = document.createElement('div');

//PASO 2. Agregar texto y atributos
nuevoElemento.innerHTML = 'NUevo';
nuevoElemento.setAttribute('class', 'box.active');

// PASO 3. Agregar elemento al DOM
const contenedor = document.getElementById('contenedor');

    //FORMA 1
    contenedor.appendChild(nuevoElemento);

    //FORMA 2 
        // afterbegin - como primer elemento
        // beforebegin - antes del elemento padre
        // beforend - como ultimo elemento
        // afterend - despeus del elemento padre

        contenedor.insertAdjacentElement('afterbegin', nuevoElemento);

    //FOMRA 3
    const box = document.querySelector('#contenedor .box');
    box.replaceWith(nuevoElemento);