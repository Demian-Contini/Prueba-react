import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    
    // 1. Inicializa el estado con el formulario inicial
    const [formState, setFormState] = useState(initialForm);

    // 2. Función para manejar el cambio en cualquier input
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    // 3. Devuelve el estado y la función para cambiarlo
    return {
        formState,
        onInputChange,
    };
}
