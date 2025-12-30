// Eventos por defecto: Eventos que se realizan por defecto que de alguna forma yo quiero evitar/controlar.

const link  = document.getElementById('link');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Se dio click en el enlace');
});