
const images = document.querySelectorAll('img');

const cargaElemento = (entradas) =>{
    
    entradas.forEach(entrada =>{
        if(entrada.isIntersecting){
            // console.log(entrada.target.dataset.src);
            entrada.target.src = entrada.target.dataset.src;
        }  
    })

};

const observador = new IntersectionObserver(cargaElemento, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});

images.forEach(img =>{
    observador.observe(img);
});