import { useState } from "react"

// Define el Custom Hook useFetch que recibe la 'url'.
export const useFetch = () => {
    
    // 1. ESTADO: Inicializa el estado para 'data', 'isLoading' y 'error'.
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const {data, isLoading, error} = state

    // 2. FUNCIÓN DE FETCH: Lógica asíncrona para la petición HTTP.
    const fetchData = async (url, method, bodyData = null) => {

        if(!url) return
    
        try {

           const options = {
            method: method,
            headers: {
            'Content-type': 'application/json; charset=UTF-8',    
            },
            body: method == 'GET'|| method =='DELETE' ? null: JSON.stringify(bodyData)
            } 

            const res = await fetch(url, options)
            const data = await res.json()
            
            // ÉXITO: Actualiza el estado con los datos.
            setState({
                data,
                isLoading: false,
                error: null
            })
        }

        catch(error){
            // FALLO: Actualiza el estado con el error.
            setState({
                data: null,
                error: error,
                isLoading: false
            })
        }
    }

    // 4. RETORNO: Devuelve el estado actual al componente que lo usa.
    return{
        data,
        isLoading,
        error,
        fetchData
    }
}