function navegar(idDestino) {
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach(element => {
        element.classList.add('oculto');
    });

    const seccionActiva = document.getElementById(idDestino);

    if (seccionActiva) {
        seccionActiva.classList.remove('oculto');
    }

    else{
        console.error("No existe seccion con ID: " + idDestino);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        
        menuBtn.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuBtn.classList.remove('active');
        });
    });
});