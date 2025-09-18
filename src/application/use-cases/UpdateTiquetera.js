// Exportamos la clase UpdateTiquetera para que se pueda usar en otros archivos
export default class UpdateTiquetera { 
    // El constructor recibe el repositorio de tiqueteras (para acceder a la base de datos)
    constructor(tiqueteraRepository) {
        // Guardamos el repositorio como propiedad de la clase
        this.tiqueteraRepository = tiqueteraRepository;
    }
   
    // Método principal que ejecuta la actualización de una tiquetera
    async execute(id, tiqueteraData) {
        // Primero buscamos la tiquetera en la base de datos por su ID
        const tiquetera = await this.tiqueteraRepository.findById(id);
        // Si no existe una tiquetera con ese ID, lanzamos un error
        if (!tiquetera) {
            throw new Error("Tiquetera no encontrada");
        }

       // Creamos un nuevo objeto con los datos actualizados
        const updatedData = {
            ...tiquetera._doc,  // Tomamos todos los datos actuales de la tiquetera      
            ...tiqueteraData,    // Sobrescribimos con los nuevos datos que recibimos     
            totalTransacciones: (tiquetera.totalTransacciones || 0) + 1
        };

        // Actualizar en base de datos
        return await this.tiqueteraRepository.update(id, updatedData);
    }
}