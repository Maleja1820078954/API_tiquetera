export default class UpdateTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, tiqueteraData) {
        const tiquetera = await this.tiqueteraRepository.findById(id);
        if (!tiquetera) {
            throw new Error("Tiquetera no encontrada");
        }

       
        const updatedData = {
            ...tiquetera._doc,        
            ...tiqueteraData,         
            totalTransacciones: (tiquetera.totalTransacciones || 0) + 1
        };

        // Actualizar en base de datos
        return await this.tiqueteraRepository.update(id, updatedData);
    }
}
