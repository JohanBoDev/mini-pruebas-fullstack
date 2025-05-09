<p align="center">
  <img src="./assets/banner.png" alt="Mini Pruebas FullStack Banner" />
</p>


# 🧠 Mini Pruebas Técnicas - Full Stack Developer

Este repositorio contiene una colección de **mini pruebas técnicas** desarrolladas con tecnologías modernas como **React, Node.js, Zustand, PostgreSQL, Chakra UI** y **Tailwind CSS v4**. Cada carpeta representa una prueba independiente, basada en desafíos reales que evalúan habilidades tanto en frontend como en backend.

---

## 📌 Tecnologías utilizadas

- ⚛️ React + Vite
- 🎨 Tailwind CSS v4
- 📦 Zustand
- 📮 React Hook Form
- 💅 Chakra UI
- 🌐 Node.js + Express
- 🐘 PostgreSQL + pg

---

## ⚠️ **Importante:** Algunas de las pruebas dentro de este repositorio requieren configuración de entorno mediante un archivo `.env`.

Cada desarrollador debe **crear su propio archivo `.env`** en aquellas pruebas donde se utilicen variables de entorno (como conexiones a bases de datos, puertos o claves API).  
En el código encontrarás referencias como `process.env.*`, por lo tanto, si no creas el archivo `.env`, la aplicación **no funcionará correctamente**.

Ejemplo básico de un `.env`:

PORT=3000
DB_HOST=localhost DB_USER=tu_usuario DB_PASSWORD=tu_contraseña DB_NAME=nombre_de_tu_base

Asegúrate de **no subir tu `.env` al repositorio** y de revisar si cada carpeta contiene un archivo `.env.example` o instrucciones específicas en su respectivo `README.md` local.

---

## 🧪 Pruebas incluidas

### ✅ Prueba 1 – Formulario de Registro
Formulario de usuario en React con validación de campos (nombre, correo, contraseña) y estilos con Tailwind CSS.

### ✅ Prueba 2 – API REST de Productos
Backend con Express y Node.js que permite CRUD de productos utilizando un array en memoria.

### ✅ Prueba 3 – Lista de Tareas con Zustand
App de tareas en React usando Zustand para manejar el estado de forma global.

### ✅ Prueba 4 – API con PostgreSQL
Adaptación de la API de productos para conectarse a PostgreSQL con consultas usando `pg`.

### ✅ Prueba 5 – Vista de Productos (Chakra UI) (Prueba Final FullStack)

Renderizado de tarjetas de productos con diseño responsivo utilizando **Chakra UI**.

- Esta prueba **consume la API creada en la Prueba 4**, la cual está conectada a una base de datos **PostgreSQL**.
- El consumo se realiza usando **Axios** para practicar el manejo de peticiones HTTP.
- Se adjunta un **PDF adicional** con las instrucciones completas de esta prueba final.

## 📂 Carpeta de Pruebas con Axios

Dentro del repositorio encontrarás una carpeta llamada `pruebas-axios` donde podrás practicar el uso de **Axios** para mejorar la estabilidad y manejo de peticiones en proyectos reales.

- Se incluye un archivo **PDF** con el enunciado de la prueba correspondiente.
- Además, para la **Prueba 5 (Prueba Final)** también se adjunta un **PDF específico** con instrucciones detalladas.
- Aunque se puede utilizar **cualquier base de datos** (como MongoDB, MySQL, etc.), en este ejemplo la base de datos utilizada es **PostgreSQL**.

Estas prácticas te ayudarán a reforzar tus habilidades tanto en el frontend como en la comunicación con APIs.

---

## 👨‍💻 Autor

**Johan Bohorquez**  
Desarrollador Full Stack | Apasionado por React, Node y crear soluciones prácticas.

---

## 📜 Licencia

Este repositorio es de uso personal, formativo y académico. Puedes reutilizar el código para practicar o adaptarlo a tus proyectos personales.

