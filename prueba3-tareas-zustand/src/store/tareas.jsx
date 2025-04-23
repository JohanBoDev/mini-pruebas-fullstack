// src/store/tareas.js
import { create } from 'zustand';

const useTareas = create((set) => ({
  tareas: [],
  agregarTarea: (texto) =>
    set((state) => ({
      tareas: [
        ...state.tareas,
        {
          id: Date.now(),
          texto,
          completada: false
        }
      ]
    })),
  marcarTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      ),
    })),
  eliminarTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.filter((tarea) => tarea.id !== id)
    }))
}));

export default useTareas;
