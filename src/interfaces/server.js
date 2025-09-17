import express from "express";
import tiqueteraRoutes from "../infrastructure/routes/tiqueteraRoutes.js";


const app = express();

app.use(express.json());

app.use("/api/tiqueteras", tiqueteraRoutes);


export default app;