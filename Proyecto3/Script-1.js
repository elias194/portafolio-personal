function toggleBox(){
    const button = document.getElementById("toggleBtn");
    const box = document.getElementById("box");

    if (box.style.display === 'none'){
        box.style.display = 'block';
        button.textContent = 'ocultar caja';
    }
    else{
        box.style.display = 'none';
        button.textContent = 'mostrar Caja';
    }
}

button.addEventListener('click', toggleBox());

