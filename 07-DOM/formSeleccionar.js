
const btn = document.getElementById('btn-enviar');

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    
    // Accedemos al elemento con metodos del DOM
    const email = document.getElementById('email').value;
    console.log(email);


    // Accedemos al elemento con el objeto form
    const formulario = document.forms['form-registro'];
    console.log(formulario.pais.value);
    console.log(formulario['terminos-condiciones'].checked);


});