class Interfaz {

    static crearMensaje(mensaje, tipo) {
        let div = document.createElement('div');
        div.classList.add('spa__mensaje');
        let p = document.createElement('p');
        if (tipo === 'error') {
            div.classList.remove('correcto');
            div.classList.add('incorrecto');
            p.textContent = mensaje;
        } else {
            div.classList.remove('incorrecto');
            div.classList.add('correcto');
            p.textContent = mensaje;
        }
        div.appendChild(p);

        return div;
    }

    static mostrarMensajes() {
        const formulario = document.getElementsByClassName('spa__formulario')[0];
        let mensaje = document.querySelector('.spa__formulario .spa__mensaje');
        let mensajePresupuesto = document.querySelector('.spa__formulario .spa__presupuesto');
        if (mensaje != null) {
            mensaje.remove();
        }
        if (mensajePresupuesto != null) {
            mensajePresupuesto.remove();
        }
        const tamanio = document.getElementById('tamanio');
        const tamanioElegido = tamanio.options[tamanio.selectedIndex].value;
        const servicio = document.getElementById('servicio');
        const servicioElegido = servicio.options[servicio.selectedIndex].value;

        if (tamanioElegido === 'seleccionar' || servicioElegido === 'seleccionar') {
            mensaje = Interfaz.crearMensaje("Complete los campos", "error");
        } else {
            mensaje = Interfaz.crearMensaje("presupuestando", "correcto");
            const loader = document.getElementsByClassName('spa__loader')[0];
            loader.classList.remove('oculto');
            setTimeout(function() {
                loader.classList.add('oculto');
                Interfaz.mostrarPresupuesto(tamanioElegido, servicioElegido);
            }, 2000);

        }
        formulario.insertBefore(mensaje, document.querySelector('.spa__formulario-container'));
        setTimeout(function() {
            mensaje = document.querySelector('.spa__mensaje');
            if (mensaje) {
                document.querySelector('.spa__mensaje').remove();
            }
        }, 2000);

    }



    static mostrarPresupuesto(tamanioElegido, servicioElegido) {
        let resultado = document.getElementById('resultado');
        let presupuesto = new Presupuesto(tamanioElegido, servicioElegido);
        const valores = presupuesto.traducirDatos();
        let div = document.createElement('div');
        div.classList.add('spa__presupuesto');
        div.classList.add('correcto');
        let divh2 = document.createElement('div');
        divh2.classList.add('spa__presupuesto-title');
        let h2 = document.createElement('h2');
        h2.textContent = 'Presupuesto';
        divh2.appendChild(h2);
        let tamanio = document.createElement('p');
        tamanio.textContent = 'Tamaño: ' + valores[0];
        let servicio = document.createElement('p');
        servicio.textContent = 'Servicio: ' + valores[1];
        let precio = document.createElement('span');
        precio.textContent = '$ ' + presupuesto.calcularPresupuesto();
        div.appendChild(divh2);
        div.appendChild(tamanio);
        div.appendChild(servicio);
        div.appendChild(precio);
        resultado.appendChild(div);
    }

    static presentarPresupuesto() {}
}