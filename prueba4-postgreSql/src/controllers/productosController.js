// src/controllers/productosController.js
import pool from "../db/db.js";

export const obtenerProductos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).json({ message: "No tienes productos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM productos WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar producto" });
  }
};

export const crearProducto = async (req, res) => {
  const { nombre, precio, categoria } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Nombre y precio son requeridos" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO productos (nombre, precio, categoria) VALUES ($1, $2, $3) RETURNING *",
      [nombre, precio, categoria || ""]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};

export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, categoria } = req.body;

  try {
    const result = await pool.query(
      "UPDATE productos SET nombre=$1, precio=$2, categoria=$3 WHERE id=$4 RETURNING *",
      [nombre, precio, categoria, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM productos WHERE id=$1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
