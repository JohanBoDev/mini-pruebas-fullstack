import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Llama a la API al montar
      .then((res) => res.json())                       // Convierte a JSON
      .then((data) => setUsuarios(data));              // Guarda los datos en el estado
  }, []); // Solo se ejecuta una vez (como al iniciar)

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}><p>{u.name}</p> <a href="">{u.email}</a></li>
      ))}
    </ul>
  );
}
export default App