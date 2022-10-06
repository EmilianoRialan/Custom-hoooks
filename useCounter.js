import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }//value por defecto es uno, despues va a ingresar el valor ingresado por el usuario
    const decrement = (value = 1) => {
        //   if (counter === 0) return;
        setCounter(counter - value);
    }
    const reset = () => {

        setCounter(initialValue);
    }

    return {

        //counter: counter,
        //redundante lo de arriba

        counter,
        increment,
        decrement,
        reset,
    }

}
