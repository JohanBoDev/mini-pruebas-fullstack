// src/controllers/productosController.js

let productos = []; // array temporal

export const obtenerProductos = (req, res) => {
    if(productos.length >= 1){
      res.json(productos);  
    }
    return res.status(404).json({message: "No tienes productos"})
};

export const obtenerProductoPorId = (req, res) => {
  const { id } = req.params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: "No encontrado" });
  res.json(producto);
};

export const crearProducto = (req, res) => {
  const { nombre, precio, categoria } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Nombre y precio son requeridos" });
  }

  const nuevoProducto = {
    id: Date.now().toString(), // ID único
    nombre,
    precio,
    categoria: categoria || "",
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
};

export const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const index = productos.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ mensaje: "No encontrado" });

  const { nombre, precio, categoria } = req.body;
  productos[index] = {
    ...productos[index],
    nombre: nombre || productos[index].nombre,
    precio: precio || productos[index].precio,
    categoria: categoria || productos[index].categoria,
  };

  res.json(productos[index]);
};

export const eliminarProducto = (req, res) => {
    const { id } = req.params;
  
    const existe = productos.some((p) => p.id === id);
    if (!existe) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
  
    productos = productos.filter((p) => p.id !== id);
    res.json({ mensaje: "Producto eliminado" });
  };
  