import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTareas from './store/tareas'

function App() {
  const [texto, setTexto] = useState("")
  const { agregarTarea, tareas, marcarTarea, eliminarTarea } = useTareas();

  const handleAgregar = () => {
    if (texto.trim() !== "") {
      agregarTarea(texto);
      setTexto("")
    }
    else {
       alert("Llena el campo")
    }

  };

  return (
    <div className='bg-black min-w-screen min-h-screen flex flex-col justify-center items-center gap-y-5'>
      <h2 className='text-white '>TodoAPP</h2>
      <div className='border border-white p-10 rounded-2xl bg-gray-400/30'>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder='Crea una tarea...'
          className='bg-white/40 rounded-xl pl-3 py-2 text-white'
        />
        <button className='text-white bg-green-500 cursor-pointer rounded-xl p-2 ml-2' onClick={handleAgregar}>Agregar tarea</button>
        <div className='mt-5'>
          {
            (tareas.length === 0 ? <p className='text-white text-center'>No tienes tareas</p>
              :
              <ul className=' flex flex-col gap-y-3 '>
                {tareas.map((tarea) => (
                  <li
                    key={tarea.id}

                    className='flex justify-between bg-white/30 p-3 rounded-xl'
                  >

                    <p className='text-white' style={{
                      textDecoration: tarea.completada ? "line-through" : "none",
                      listStyle: "none"
                    }}> {tarea.texto}{" "}</p>
                    <div className='flex gap-3'>
                      <button className='cursor-pointer' onClick={() => marcarTarea(tarea.id)}>✅</button>
                      <button className='cursor-pointer' onClick={() => eliminarTarea(tarea.id)}>🅱️</button>
                    </div>

                  </li>
                ))}
              </ul>
            )
          }

        </div>

      </div>

    </div>

  );
}

export default App
