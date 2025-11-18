// Importa el Custom Hook 'useFetch'.
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

// Componente principal para mostrar datos.
export const FetchApp = () => {
    
    const url = 'https://jsonplaceholder.typicode.com/users'

    // Usa el Hook para hacer la petición a la URL y obtener el estado.
    const {data, isLoading, error, fetchData} = useFetch()

    useEffect(() => {
      fetchData(url, 'GET')
    
    }, [])
    
    
    return (
        <>
            <h2>Lista de Usuarios: </h2>

            {/* Renderizado Condicional: Muestra el estado actual (Cargando, Error o Datos) */}
            {isLoading 
                ? <h4> Cargando... </h4>
            
                : error
                ? <h4>Ha ocurrido un error: {error} </h4>
            
                :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Mapea la lista de usuarios obtenida.
                            data.map(user => {
                                return(
                                    <tr key={user.id}>
                                        <th scope="row"> {user.id} </th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}