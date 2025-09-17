import "dotenv/config.js";
import connectDB from"./config/database.js";
import app from "./interfaces/server.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        // console.log(`servidor ejecutandose en el puerto}: http://${PORT}`);
        console.log(`servidor ejecutandose en el puerto http://${PORT}`);
    });
});