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