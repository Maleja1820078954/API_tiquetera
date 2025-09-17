import mongoose from "mongoose";
import Tiquetera from "../../domain/models/Tiquetera.js";

const TiqueteraSchema = new mongoose.Schema({
    nrotiquetera: String,
    cliente: String,
    saldo: Number,
    totalTransacciones: Number
});

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema); //creamos el modelo de la base de datos

class TiqueteraRepositoryMongo {
    async create(tiqueteraData) {
        const tiquetera = new  TiqueteraModel (tiqueteraData);
        return await tiquetera.save();
    }

    async findAll() {
        return await TiqueteraModel.find();
    }

    async findById(id) {
        return await TiqueteraModel.findById(id);
    }
    
    async update(id, tiqueteraData) {
        return await TiqueteraModel.findByIdAndUpdate(id, tiqueteraData, { new: true });
    }

    async delete(id) {
        return await TiqueteraModel.findByIdAndDelete(id);
    }



}

export default TiqueteraRepositoryMongo;