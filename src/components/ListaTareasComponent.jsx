export const ListaTareasComponent = () => {

    // Estado inicial, que es una sola tarea
const initialState = [
    {id: 1, name: 'Explicar Reducers', finaliza: false }
]
    //Nueva Traea seria la segunda tarea que agregaremos
const nuevaTarea = {
    id: 2, name: 'Explicar useReducers', finaliza: false
}


const tareaEditar = {id :1, name: 'Explicar Diapositiva de Reducer', finalizada : false}

//Agergar tarea sera el action (accion 1)
const agregarTarea = {
    type: '[TAREAS] Agregar Tarea', //El nombre de la tarea
    payload: nuevaTarea //Esto manda la nueva tarea
}

//(accion 2)
const editarTarea = {
    type: '[TAREAS] Editar Tarea', 
    payload: tareaEditar 
}

//(accion 3)
const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
}

//(accion 4)
const borrarTareas = {
    type: '[TAREAS] Borrar Tareas', 
}

// Recibe un estado actual y la accion
 const tareaReducer = (state= initialState, action={}) => {

        switch (action.type) {
            case '[TAREAS] Agregar Tarea':
                return [...state, action.payload]

            case '[TAREAS] Editar Tarea':
              //  return [...state, action.payload]

            case '[TAREAS] Eliminar Tarea':
               // return [...state, action.payload]

            case '[TAREAS] Borrar Tareas':
                return [...state, action.payload]
                
            default:
                break;
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
