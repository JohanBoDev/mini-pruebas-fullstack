# 🧪 Prueba 2 – API REST de Productos (Node.js + Express)

## 📋 Descripción

Esta prueba consiste en desarrollar una **API REST utilizando Node.js y Express** que permita gestionar productos a través de operaciones CRUD (Crear, Leer, Actualizar, Eliminar). No es necesario usar una base de datos; los datos pueden mantenerse en un array en memoria.

---

## ✅ Requisitos funcionales

- Crear una API con las siguientes rutas:
  - `GET /api/productos` → Obtener todos los productos
  - `GET /api/productos/:id` → Obtener un producto por ID
  - `POST /api/productos` → Crear un nuevo producto
  - `PUT /api/productos/:id` → Actualizar un producto existente
  - `DELETE /api/productos/:id` → Eliminar un producto

- Cada producto debe tener:
  - `id`: número o string único
  - `nombre`: string
  - `precio`: número
  - `categoría`: string (opcional)

---

## 💡 Consideraciones técnicas

- Los productos deben almacenarse en un array en memoria.
- Validar que el cuerpo de los `POST` y `PUT` incluya `nombre` y `precio`.
- Se puede usar `uuid` para generar IDs si se desea.
- El servidor debe correr en el puerto `3000`.

---

## 🧱 Tecnologías usadas

- 🟢 Node.js
- ⚙️ Express.js
- 🔄 Cors
- 📦 dotenv
- (Opcional: `uuid` para generar IDs únicos)

---

## 🚀 Instalación y ejecución

```bash
npm install
npm run dev
