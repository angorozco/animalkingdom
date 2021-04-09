const formulario = document.getElementsByClassName('spa__formulario')[0];

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    Interfaz.mostrarMensajes();
})