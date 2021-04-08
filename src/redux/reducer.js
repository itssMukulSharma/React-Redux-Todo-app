import { ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_TODO } from './actions'
import { todos } from './states';

export const reducer = (state = null, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state]
            action.payload.id = newTodos.length + 1
            newTodos.push(action.payload)
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state]
            let index = -1
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newTodos[index] = action.payload
                return newTodos;
            }
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload)
            return newTodos;

        case GET_TODO:
            state = todos
            return state;
    }
    return state;
}