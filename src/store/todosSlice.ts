import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
    id: number,
    text: string
  }

interface ITodosState {
    todoItems: ITodo[]
}

const initialState: ITodosState = {
    todoItems: [
        {
            id: 1,
            text: 'first Todo'
        }
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todoItems.push({
                id: Date.now(),
                text: action.payload
            })
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            state.todoItems.filter(todo => todo.id !== action.payload)
        }
    }
})


export const {addTodo, removeTodo} = todosSlice.actions
export const todosReducers = todosSlice.reducer