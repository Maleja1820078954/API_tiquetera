export default class UpdateCliente {
    constructor(tiqueteraRepository) {
       this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, tiqueteraData) {
       return await this.tiqueteraRepository.update(id, tiqueteraData);
    }
}