
const formulario = document.forms['form-registro'];
const usernameDB = ['usuario1', 'usuario2', 'usuario3', 'admin', 'test'];
const username = formulario.username;
let indicador = false;

username.addEventListener('keyup', () =>{
   

    if(usernameDB.includes(username.value)){
        username.style.border = '1px solid red';
        indicador = false;
    }else{
        username.style.border = '1px solid green';
        indicador = true;
    }

});


formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    const expresionRegular = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

    const datos = {
      username: formulario.username.value,
      email: formulario.email.value,
      pais: formulario.pais.value,
      terminos: formulario['terminos-condiciones'].checked
    }


    // VERIFICACIONES
    if(datos.username === ''){
        console.log('Nombre de usuario vacio');
        return;
    }

    if(!indicador){
        console.log('Nombre de usuario existente');
        return;
    }
    
    if(!expresionRegular.test(datos.email)){
        console.log('No es un correo valido');
        return;
    }

    if(datos.pais === ''){
        console.log('Pais vacio');
        return;
    }

    if(!datos.terminos){
        console.log('Debes aceptar terminos y condiciones');
        return;
    }



    console.log('Datos enviados');
    console.log(datos);

    formulario.submit();
});