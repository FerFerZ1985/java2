
const contenedor = document.getElementById('contenedor');
const cajaDrag = document.getElementById('caja-drag');
const cajas = document.querySelectorAll(".caja");




//? Eventos para el elemento a desplazar

cajaDrag.addEventListener('dragstart', () =>{
    console.log('Se agarró el elemento');
})

cajaDrag.addEventListener('drag', () =>{
    console.log('Se tiene seleccionado el elemento');
})

cajaDrag.addEventListener('dragend', () =>{
    console.log('Se soltó el elemento');
})




//? Eventos para el contenedor

contenedor.addEventListener('dragenter', () =>{
    console.log('Entró en el contenedor');
});

contenedor.addEventListener('dragover', (e) =>{
    e.preventDefault();
    console.log('Estoy dentro de la zona');
});

contenedor.addEventListener('dragleave', () =>{
    console.log('El elemento salió de la zona');
});

contenedor.addEventListener('drop', () =>{
    console.log('Se soltó el elemento en la zona');
});




//? Mover elemento al contenedor - dataTransfer

cajaDrag.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('id', e.target.id);
});

contenedor.addEventListener('dragover', (e) =>{
    e.preventDefault();
});

contenedor.addEventListener('drop', (e) =>{
    const id = e.dataTransfer.getData('id');
    const elemento = document.getElementById(id);
    contenedor.appendChild(elemento);
});




//? Ejemplo Practico

cajas.forEach(caja =>{

    // Inicio del drag
    cajaDrag.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('id', e.target.id);
    });

    //Cuando un elemento arrastrable se arrastra sobre un elemento de cuadro
    caja.addEventListener('dragover', (e) =>{
        e.preventDefault();
        caja.classList.add('hovered');
    });

    //Cuando un elemento arrastrable sale del elemento del cuadro
    caja.addEventListener('dragleave', (e) =>{
        caja.classList.remove('hovered');
    });

    // Cuando un elemento arrastrable se suelta en un elemento de cuadro
    caja.addEventListener('drop', (e) =>{
        const id = e.dataTransfer.getData('id');
        const elemento = document.getElementById(id);
        caja.appendChild(elemento);
        caja.classList.remove('hovered');
    });

})
