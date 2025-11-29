//1# Forma - Palabra Export
const nombre = 'Fer';

const suma = (a,b) => {
    return a + b;
}

const datos = {
    nombre: 'Fer',
    apellido: 'Zarate',
    edad: 40,
    curso: 'Javascript'
}

// 2# Forma - Colocando al final del documento
export {nombre, suma, datos}

// 3# Export default
export default nombre;