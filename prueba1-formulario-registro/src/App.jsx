import { useState } from 'react'
import './index.css'



function App() {
  const [form, setForm] = useState([])
  const [usuario, setUsuario] = useState({ nombre: "", correo: "", contraseña: "" })

  const agregarUsuario = (e) => {
    e.preventDefault();
  
    const { nombre, correo, contraseña } = usuario;
  
    if (!nombre.trim() || !correo.trim() || !contraseña.trim()) {
      alert("Por favor llena todos los campos");
      return;
    }
  
    if (contraseña.trim().length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }
  
    setForm([...form, usuario]);
    alert("Usuario registrado exitosamente");
    setUsuario({ nombre: "", correo: "", contraseña: "" }); // Limpia el formulario
  };

  return (
    <div className='flex justify-center gap-y-2 items-center h-screen w-screen bg-black flex-col'>
      <h1 className='text-white text-4xl mb-5'>Formulario de Inicio de Sesion</h1>
      <form className='flex min-w-[500px] flex-col bg-gray-400/30 p-10 border-white border rounded-2xl' action="">
        <div className='mb-4 flex flex-col gap-y-2'>
          <label htmlFor="" className='text-white font-bold'>Nombre de usuario</label>
          <input className='p-2 border bg-white border-white rounded-2xl text-black ' type="text" value={usuario.nombre} onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
            name='nombre' placeholder='Nombre de usuario...' />
        </div>
        <div className='mb-4 flex flex-col gap-y-2'>
          <label htmlFor="" className='text-white font-bold'>Correo electronico</label>
          <input className='p-2 border bg-white border-white rounded-2xl text-black ' type="email" placeholder='Email' value={usuario.correo} onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })} />
        </div>
        <div className='mb-4 flex flex-col gap-y-2'>
          <label htmlFor="" className='text-white font-bold'>Contraseña</label>
          <input className='p-2 border bg-white border-white rounded-2xl text-black ' type="password" placeholder='Introduce la contraseña' value={usuario.contraseña} onChange={(e) => setUsuario({ ...usuario, contraseña: e.target.value })} />
        </div>
        <button className='bg-green-500 p-3 rounded-2xl text-white font-bold cursor-pointer hover:bg-green-700 transition-all ease-in'  onClick={agregarUsuario}>Registrarse</button>
      </form>
    </div>
  )
}

export default App
