import { useState } from 'react'

export const useForm = (initialForm = {}) => {
    //FORMULARIO PARA CAMBIAR DE ESTADO
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,//CON ESTO MANTENES TODOS LOS DATOS QUE YA ESTABAN EN EL COMPONENTE
            [name]: value//ACA ASIGNAS UN NUEVO VALOR AL COMPONENTE, toma el valor name com referencia se recomienda no colocar dos veces el mismo name
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
