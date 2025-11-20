export const ListaTareasComponent = () => {

    // Estado inicial, que es una sola tarea
const initialState = [
    {id: 1, name: 'Explicar Reducers', finaliza: false }
]
    //Nueva Traea seria la segunda tarea que agregaremos
const nuevaTarea = {
    id: 2, name: 'Explicar useReducers', finaliza: false
}
//Agergar tarea sera el action (accion)
const agregarTarea = {
    type: '{TAREAS} Agregar Tarea', //El nombre de la tarea
    payload: nuevaTarea //Esto manda la nueva tarea
}
// Recibe un estado actual y la accion
 const tareaReducer = (state= initialState, action={}) => {
    if (action.type == '{TAREAS} Agregar Tarea') {

        return [...state, action.payload]
    }
    return state
 }
 // Este console log, llama la reducer pasandole el inicialState
 console.log(tareaReducer(initialState, agregarTarea))
 
 
return (
    <>
    </>
  )
}
