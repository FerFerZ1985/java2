const cursor = document.getElementById('cursor');


document.addEventListener('mousemove', (e) =>{
    // console.log(`X: ${e.clientX}, Y: ${e.clientY}`);

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})