import { Router } from 'express';
import { createTiquetera, getTiqueteras, getTiqueteraById, updateTiquetera, deleteTiquetera } from '../controllers/tiqueteraController.js';

const router = Router();

router.post("/", createTiquetera);

router.get("/", getTiqueteras);

router.get("/:id", getTiqueteraById);

router.put("/:id", updateTiquetera);

router.delete("/:id", deleteTiquetera);

export default router;
