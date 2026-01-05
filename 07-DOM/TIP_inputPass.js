
const formulario = document.getElementById('form-registro');
const toggle = document.querySelectorAll('.toggle');
const inputPassword = document.getElementById('password');
const inputConfirmar = document.getElementById('confirm-password');


// Ocultar y mostrar contraseña
toggle.forEach((icon) =>{
    icon.addEventListener('click', (e) =>{
        const input = e.target.previousElementSibling;

       if(input.type === 'password'){
            input.type = "text";
            e.target.classList.replace('bx-low-vision', 'bx-show-alt');
       }else{
            input.type = "password";
            e.target.classList.replace('bx-show-alt', 'bx-low-vision');
       }
    });
});


// Confirmar contraseña
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(inputPassword.value === inputConfirmar.value){
        formulario.submit();
    }else{
        alert('Error: La contraseña debe coincidir');
        inputPassword.style.border = '1px solid red';
        inputConfirmar.style.border = '1px solid red';
    }

});