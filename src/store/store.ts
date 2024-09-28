import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todosReducers } from "./todosSlice";

const reducers = combineReducers({
    todos: todosReducers
})

export const store = configureStore({
    reducer: reducers
})