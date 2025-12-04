// Estructura de una condicional
// if(pregunta){
//     //codigo a ejectar si la respeusta es true
// }else{
//     //codigo a ejecutar si la respuesta es false
// }

// const semaforo = 'rojo';

// if (semaforo === 'verde'){
//     console.log('Puedes Avanzar')
// }else{
//     if(semaforo === 'amarillo'){
//         console.log('Avanza con precaucion')
//     }else{
//         console.log('No puedes avanzar');    
//     }
// }

// EJEMPLO 2
const edad = 18
const acceso = false;


const comprobacion = edad >= 18 && acceso
                                ? 'Puede acceder'
                                : 'No puede acceder';

if (edad >= 18){
    if(acceso){
        console.log('Puede Acceder');
    }else{
        console.log('No puede acceder');
    }
}else{
    console.log('No puede acceder, es menor de edad');
}