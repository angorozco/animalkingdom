class Presupuesto {
    constructor(tamanio, servicio) {
        this.tamanio = tamanio;
        this.servicio = servicio;
        this.precio = 500;
    }



    calcularPresupuesto() {
        switch (this.tamanio) {
            case 'pequenio':
                this.precio += this.precio * .2;
                break;
            case 'mediano':
                this.precio += this.precio * .4;
                break;
            case 'grande':
                this.precio += this.precio * .6;
                break;
        }
        switch (this.servicio) {
            case 'peluqueria':
                this.precio += this.precio * .5;
                break;
            case 'cortePelo':
                this.precio += this.precio * .7;
                break;
            case 'corteUñas':
                this.precio += this.precio * .9;
                break;
        }
        return this.precio;
    }

    traducirDatos() {
        let tamanio;
        let servicio;
        switch (this.tamanio) {
            case 'pequenio':
                tamanio = 'pequeño';
                break;
            case 'mediano':
                tamanio = 'mediano';
                break;
            case 'grande':
                tamanio = 'grande';
                break;
        }
        switch (this.servicio) {
            case 'peluqueria':
                servicio = 'peluquería';
                break;
            case 'cortePelo':
                servicio = 'corte de pelo';
                break;
            case 'corteUñas':
                servicio = 'corte de uñas';
                break;
        }
        return [tamanio, servicio];
    }
}