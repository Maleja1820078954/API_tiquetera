//clase tiquetera pascalCase

class Tiquetera { //entidad Tiquetera
    constructor({id, nrotiquetera, cliente, saldo, totalTransacciones}){
        this.id = id;
        this.nrotiquetera = nrotiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
    
    }
}

export default Tiquetera;