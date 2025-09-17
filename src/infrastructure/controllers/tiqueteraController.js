import TiqueteraRepositoryMongo from "../repositories/TiqueteraRepositoryMongo.js";
import CreateTiquetera from "../../application/use-cases/CreateTiquetera.js";
import GetTiqueteras from "../../application/use-cases/GetTiqueteras.js";
import GetTiqueteraById from "../../application/use-cases/GetTiqueteraById.js";
import UpdateTiquetera from "../../application/use-cases/UpdateTiquetera.js";
import DeleteTiquetera  from "../../application/use-cases/DeleteTiquetera.js";


// POST /tiquetera
const tiqueteraRepository = new TiqueteraRepositoryMongo();

export const createTiquetera= async (req, res) => {
    try{
        const createTiquetera = new CreateTiquetera(tiqueteraRepository);
        const tiquetera = await createTiquetera.execute(req.body); //ejecutamos el usecase para crear la compra
        res.status(201).json(tiquetera);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

// GET /tiquetera
export const getTiqueteras = async (req, res) => {
  try {
    const getTiqueteras = new GetTiqueteras(tiqueteraRepository);
    const tiqueteras = await getTiqueteras.execute();
    res.json(tiqueteras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /tiqueteras/:id
export const getTiqueteraById = async (req, res) => {
  try {
    const getTiqueteraById = new GetTiqueteraById(tiqueteraRepository);
    const tiquetera = await getTiqueteraById.execute(req.params.id);
    if (!tiquetera) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
};

// PUT /tiqueteras/:id
export const updateTiquetera = async (req, res) => {
  try {
    const updateTiquetera = new UpdateTiquetera(tiqueteraRepository);
    const tiquetera = await updateTiquetera.execute(req.params.id, req.body);
    if (!tiquetera) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /tiqueteras/:id
export const deleteTiquetera = async (req, res) => {
  try {
    const deleteTiquetera = new DeleteTiquetera(tiqueteraRepository);
    const result = await deleteTiquetera.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.json({ message: "Tiquetera eliminada correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

