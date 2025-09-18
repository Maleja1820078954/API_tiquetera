//clase tiquetera pascalCase

class Tiquetera { //entidad Tiquetera
    constructor({id, nrotiquetera, cliente, saldo, totalTransacciones, observaciones}) {
        this.id = id;
        this.nrotiquetera = nrotiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
        this.observaciones = observaciones;
    }
}

export default Tiquetera;