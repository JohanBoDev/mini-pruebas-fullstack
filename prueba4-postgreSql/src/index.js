import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.js";
import pool from "./db/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/productos", productosRoutes);

app.get("/", (req, res) => {
  res.send("API activa");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
