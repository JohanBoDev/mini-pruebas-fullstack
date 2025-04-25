import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState(null)
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const [categoria, setCategoria] = useState("")
  const [id, setId] = useState(0)


  const crearProducto = async () => {
    if (nombre === "" || precio === "" || categoria === "") {
      console.log("Debes llenar los campos");
      return; // corta la función
    }

    try {
      const res = await axios.post("http://localhost:3000/api/productos", {
        nombre,
        precio,
        categoria
      });

      console.log("✅ Producto creado:", res.data);
      setCategoria("")
      setNombre("")
      setPrecio(0)
      obtenerProductos();
    } catch (error) {
      console.log("❌ Error:", error.message);
    }

  }

  const eliminarProducto = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/productos/${id}`)
      obtenerProductos()
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }

  const obtenerProductos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/productos/")
      setProductos(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const obtenerProductoPorId = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/productos/${id}`)
      setProducto(res.data)
    } catch (error) {
      console.log(error.message);
      setProducto(null);
    }
  }



  useEffect(() => {
    obtenerProductos();
  }, [])


  return (
    <main className='flex  gap-y-5 items-center h-screen flex-col bg-black relative'>



      <section className='mt-10'>
        <h1 className='text-white text-center text-4xl font-bold'>Todos los productos disponibles</h1>
        <div className='mt-10'>
          {
            productos.length > 0 ? (
              <ul className='grid grid-cols-4 gap-3'>
                {productos.map((producto) => (
                  <li key={producto.id} className="bg-white/10 backdrop-blur-sm border border-white/30 p-5 rounded-xl shadow-md flex flex-col gap-2 text-white">
                    <p>
                      <span className="font-semibold text-sky-300">Nombre:</span> {producto.nombre}
                    </p>
                    <p>
                      <span className="font-semibold text-sky-300">Precio:</span>{" "}
                      <span className="font-bold">${producto.precio}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-sky-300">Categoría:</span> {producto.categoria}
                    </p>

                    <button
                     onClick={() => {
                      if (confirm("¿Estás seguro de eliminar este producto?")) {
                        eliminarProducto(producto.id);
                      }
                    }}
                      className="self-start mt-2 bg-red-600 hover:bg-red-700 transition-all px-3 py-1 text-white rounded-lg shadow-sm font-bold"
                      title="Eliminar producto"
                    >
                      🅱️ Eliminar
                    </button>
                  </li>

                ))}
              </ul>
            ) : (
              <p className='text-center text-white'>No tienes productos todavía</p>
            )
          }
        </div>


      </section>
<div className='grid grid-cols-2 gap-5 mt-10'>
      <form
        onSubmit={(e) => { e.preventDefault(); crearProducto(); }}
        className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto flex flex-col gap-4"
      >
        <label htmlFor="nombre" className="font-semibold text-gray-700">Nombre del producto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <label htmlFor="precio" className="font-semibold text-gray-700">Precio del producto</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <label htmlFor="categoria" className="font-semibold text-gray-700">Categoría del producto</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg mt-4 transition-all"
        >
          Crear producto
        </button>
      </form>
      <form
        className=" w-[320px] p-6 bg-white rounded-xl shadow-md flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          obtenerProductoPorId(id);
        }}
      >
        <label htmlFor="id" className="text-gray-700 font-semibold">ID del producto</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          Enviar
        </button>
      </form>

      <div className=" w-[320px]">
        {producto ? (
          <article className="bg-white/20 backdrop-blur-sm border border-white/30 shadow-md p-5 rounded-xl text-white">
            <h2 className="text-lg font-bold mb-2">Producto encontrado</h2>
            <p>🛒 <strong>Nombre:</strong> {producto.nombre}</p>
            <p>💰 <strong>Precio:</strong> ${producto.precio}</p>
          </article>
        ) : (
          <p className="text-white bg-red-600/80 px-4 py-3 rounded-xl shadow-md">
            Producto no encontrado
          </p>
        )}
      </div>

</div>


    </main>
  )
}

export default App
