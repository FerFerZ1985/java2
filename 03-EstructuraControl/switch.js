const persona = {
    pais: 'Mexico'
};

// if(persona.pais === 'Venezuela'){
//     console.log('Eres Venezolano');
// }else if(persona.pais === 'Mexico'){
//     console.log('Eres Mexicano');
// }else if(persona.pais === 'Espania'){
//     console.log('Eres Espaniol');
// }else{
//     console.log('Eres de otro pais');
// }

//SWITCH

switch (persona.pais){
    case 'Venezuela':
        console.log('Eres Venezolano');
        break;
    case 'Mexico':
        console.log('Eres Mexicano');
        break;
    case 'Espanal':
        console.log('Eres Espanol');
        break;

    default: 
        console.log('Eres de otro pais');            
}