# 🧪 Prueba 4: API de Productos con PostgreSQL (Node.js + Express)

## 📝 Descripción

Esta prueba consiste en adaptar una API REST de productos utilizando Node.js, Express y PostgreSQL como base de datos, reemplazando el almacenamiento en memoria por persistencia real. Se utiliza la librería `pg` para conectarse a PostgreSQL.

---

## 📦 Instalación

1. Copia la plantilla base:

```bash
cp -r prueba2-api-productos prueba4-postgresql
cd prueba4-postgresql
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea una base de datos PostgreSQL:

Puedes llamarla por ejemplo `productosdb`.

4. Ejecuta esta consulta para crear la tabla de productos:

```sql
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio NUMERIC(10, 2) NOT NULL,
  categoria VARCHAR(50) NOT NULL
);
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` con el siguiente contenido:

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/productosdb
PORT=3000
```

Reemplaza `usuario` y `contraseña` por los de tu base de datos.

---

## 🚀 Ejecutar el servidor

```bash
npm run dev
```

---

## 📁 Endpoints disponibles

- `GET /api/productos` → Lista todos los productos.
- `POST /api/productos` → Crea un nuevo producto.
- `PUT /api/productos/:id` → Actualiza un producto por ID.
- `DELETE /api/productos/:id` → Elimina un producto por ID.

---

## 🛠️ Tecnologías usadas

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- nodemon (opcional)