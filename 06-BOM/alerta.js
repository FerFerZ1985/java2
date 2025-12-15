// Alerta: Permite mostrar informacion al usuario
// alert('Hola como estas');

// Confirmacion: Alerta donde el usuario puede aceptar o cancelar. Devuelve true o false
// const pregunta = confirm('Sos mayor de edad?');
//     if(pregunta){
//         alert('Bienvenido');
//     }else{
//         alert('No puedes acceder');
//         location.reload();
//     }

// Alerta con input: Alerta que permite intruoducir un valo. Devuelve la respuesta del usuario
const valorUsuario = prompt('Escribe tu animal favorito');
alert(`Tu animal favorito es ${valorUsuario}`);