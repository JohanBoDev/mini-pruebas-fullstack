import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [lista, setLista] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [publicacion, setPublicacion] = useState([])
  const [id, setId] = useState(0)
  const [comentarios, setComentarios] = useState([])

  const obtenerUsuarios = async () => {
    try {
      const usuarios = await axios.get("https://jsonplaceholder.typicode.com/users")
      setLista(usuarios.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const obtenerPublicacion = async () => {
    try {
      const getPublicacion = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPublicacion(getPublicacion.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const actualizarPublicacion = async () => {
    try {
      const publicacionActualizada = await axios.put("https://jsonplaceholder.typicode.com/posts/1",
        {
          title: title
        }
      )
      console.log("Titulo actualziado correctamente")
    } catch (error) {
    console.log(error.message)
    }

  }

  const crearPublicacion = async () => {
    try {
      const publicacionCreada = await axios.post("https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
          id: id
        }
      )

      console.log("Se creo correctamente")
    } catch (error) {
      console.log(error.message)
    }
  }

  const eliminarPublicacion = async () => {
    try {
      const eliminada = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
      alert("Publicacion eliminadad correctamente")
      setPublicacion(prev => prev.filter((p) => p.id !== 1));
    } catch (error) {
      console.log(error.message)
    }
  }

  const obtenerComentarios = async () => {
    try {
      const comentarios = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
      alert("Comentario obtenido")
      setComentarios(comentarios.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    obtenerUsuarios();
    obtenerPublicacion();
    obtenerComentarios();
  }, [])
  return (
    <main>
      {/* Formulario de la publicacion */}
      <section className='flex justify-center'>
        <form className='flex flex-col min-w-[500px] bg-gray-400/30 p-5 gap-y-3 rounded-2xl ' onSubmit={(e) => { e.preventDefault(); crearPublicacion(); }} action="">
          <label htmlFor="">Titulo del post</label>
          <input className='pl-5 py-2 rounded-xl bg-gray-500/30' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="">Cuerpo del post</label>
          <input className='pl-5 py-2 rounded-xl bg-gray-500/30' type="text" value={body} onChange={(e) => setBody(e.target.value)} />
          <label htmlFor="">ID del post</label>
          <input className='pl-5 py-2 rounded-xl bg-gray-500/30' type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />
          <button className='p-2 bg-green-500 cursor-pointer text-white font-bold rounded-xl' type='submit'>Enviar publicacion</button>
        </form>
      </section>
      {/*Seccion de usuarios*/}
      <section className='flex justify-center gap-y-5 items-center h-screen flex-col'>
        <ul className='grid grid-cols-4 gap-3'>
          {
            lista.map((usuario) => (
              <li key={usuario.id} >
                <p>{usuario.username}</p>
                <p>{usuario.email}</p>
              </li>
            ))
          }
        </ul>
      </section>
      {/* Seccion de publicaciones */}
      <section>
        <h1 className='text-center'>Publicaciones</h1>
        <ul className='grid grid-cols-4 gap-3'>
          {
            publicacion.map((p) => (
              <li className='bg-gray-400/30 rounded-xl p-3 ' key={p.id}>
                <p>{p.title}</p> <p>{p.id}</p>
              </li>
            ))
          }
        </ul>
      </section>

      <button className='text-white bg-green-500 cursor-pointer ' onClick={() => eliminarPublicacion()}>Eliminar publicacion</button>

      {/* Formulario que actualiza el post*/}
      <form className='bg-gray-400/30 mt-10 gap-y-5 max-w-[400px] p-5 rounded-xl flex flex-col' action="" onSubmit={(e) => { e.preventDefault(); actualizarPublicacion() }}>
        <label htmlFor="">Titulo</label>
        <input className='bg-gray-500/30 pl-5 py-2' placeholder='Actualiza el titulo' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className='text-white bg-green-500 cursor-pointer ' type='submit'>Actualizar</button>
      </form>
    
      {/* Seccion de comentarios */}
      <section>
  <h1>Comentarios</h1>
  <ul className='grid grid-cols-4 gap-5'>
      {
    comentarios.map((c)=>(
     <li className='bg-gray-400/30 p-5 rounded-xl' c key={c.id}>
      <p>{c.name}</p>
     </li>
    ))
  }
  </ul>

      </section>
    </main>

  )
}

export default App
