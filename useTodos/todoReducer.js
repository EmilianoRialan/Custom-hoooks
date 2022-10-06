export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,//ESPARCE TODO EL TODO LO COPIA EN OTRO ARREGLO
                        done: !todo.done//SI ESTA EN FALSE VA A SER TRUE 
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}
