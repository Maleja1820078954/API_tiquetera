import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, //Nuevo parser de URL  de Mongodb
            useUnifiedTopology: true // Nuevo motor de monitoreo de servidores
        });
        console.log("Conectado a la base de datos");
    } catch (err) {   
        console.error("Error de conexion",err);
        process.exit(1);//finaliza la ejecución si falla la connexión
    }
};

export default connectDB; // Exporta la función para reutilizarla en otros archivos